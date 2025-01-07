<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Integration\Payu;
use App\Models\Cmsrs\Checkout;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\DeliverService;
use App\Services\Cmsrs\Helpers\CacheService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\PaymentService;
use App\Services\Cmsrs\ProductService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FrontController extends Controller
{
    private $menus;

    private $langs;

    public function __construct(
        protected ConfigService $configService,
        protected DeliverService $deliverService,
        protected MenuService $menuService,
        protected PageService $pageService,
        protected PaymentService $paymentService,
        protected ProductService $productService,
    ) {
        $this->menus = MenuService::getMenu(); // $menus;
        $this->langs = $this->configService->arrGetLangs();
    }

    private function validatePage($page)
    {
        if (empty($page)) {
            abort(404);
        }

        if (! $this->pageService->checkAuth($page)) {
            abort(401);
        }
    }

    public function search(Request $request, $lang = null)
    {

        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $key = $request->input('key');
        $products = $this->productService->wrapSearchProducts($lang, $key);

        $data = [
            'key' => $key,
            // 'url_search' => $urlSearch,
            'products' => $products,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ];

        return view('cmsrs.search', $data);
    }

    public function shoppingsuccess(Request $request, $lang = null)
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $objCheckout = null;
        if ($request->session()->has('checkout_id')) {
            $checkoutId = $request->session()->get('checkout_id');
            $objCheckout = Checkout::find($checkoutId);
            $request->session()->forget('checkout_id');
        }

        if (empty($objCheckout)) {
            abort(404);
        }

        $data = [
            'checkout' => $objCheckout,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
            'view' => 'cmsrs.shoppingsuccess', // it must be here because we clear localstorage cart
        ];

        return view('cmsrs.shoppingsuccess', $data);
    }

    public function checkout(Request $request, $lang = null)
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $payments = PaymentService::getPayment();
        $delivers = DeliverService::getDeliver();

        // $token =  '123todo'; // User::getTokenForClient(); //todo - when user not auth
        $data = [
            // 'token' => $token,
            'payments' => $payments,
            'delivers' => $delivers,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ];

        return view('cmsrs.checkout', $data);
    }

    public function postCheckout(Request $request)
    {
        $lang = $request->input('lang');
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        $request->validate([
            'products' => 'required',
            'email' => 'required|email',
            'first_name' => 'required',
            'last_name' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
            'telephone' => 'required',
            'postcode' => 'required',
            'deliver' => 'required',
            'payment' => 'required',
        ]);

        $data = $request->only(
            'products',
            'email',
            'first_name',
            'last_name',
            'address',
            'country',
            'city',
            'telephone',
            'postcode',
            'deliver',
            'payment'
        );

        [
            'productsDataAndTotalAmount' => $productsDataAndTotalAmount,
            'checkout' => $checkout,
            'objCheckout' => $objCheckout
        ] = $this->productService->saveCheckout($data, (Auth::check() ? Auth::user()->id : null), session()->getId());

        if ($data['payment'] == PaymentService::KEY_PAYU) {
            // redirect to payU
            $payu = new Payu;

            $data = $payu->dataToSend($productsDataAndTotalAmount, $checkout);

            Log::debug(' data sended to payu: '.var_export($data, true));

            $redirectUri = $payu->getOrder($data);
            if (empty($redirectUri)) {
                // throw new \Exception("Something wrong with payu - i cant obtain the redirectUri");
                Log::debug('Something wrong with payu - i cant obtain the redirectUri');

                return response()->json(['success' => false, 'error' => 'Something wrong with payu - try later.'], 200);
            }
            Log::debug('payu redirect url: '.$redirectUri);

            return redirect($redirectUri);

        } else {
            $isManyLangs = (new ConfigService)->isManyLangs();
            $urlShoppingSuccess = $isManyLangs ? route('shoppingsuccess', ['lang' => $lang]) : route('shoppingsuccess');

            /** @var \Illuminate\Session\Store $session */
            $session = $request->session();
            $session->flash('checkout_id', $objCheckout->id);

            return redirect($urlShoppingSuccess);
        }

    }

    public function index($lang = null)
    {
        if ((count($this->langs) > 1) && $lang == $this->langs[0]) {
            abort(404);
        }
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
        App::setLocale($lang);

        // todo - http_referer - i don't know how to obtain this value - it should be from payu
        // it make sense only for payU - it my opinion
        $isNewOrders = false; // Order::copyDataFromBasketToOrderForUser();

        $page = PageService::getMainPage();
        $this->validatePage($page);

        // slider_main
        $sliderDataImages = $this->pageService->getPageDataByShortTitleCache('main_page_slider', 'images');

        $data = $this->pageService->getDataToView($page, [
            // 'url_search' =>  $urlSearch,
            'view' => 'index',
            'is_new_orders' => $isNewOrders,
            'slider_images' => $sliderDataImages,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('cmsrs.index', $data);
    }

    public function getPageLangs($lang, $menuSlug, $pageSlug = null, $productSlug = null)
    {
        $data = $this->getPage($menuSlug, $pageSlug, $productSlug, $lang);

        return view($data['view'], $data);
    }

    public function getPage($menuSlug, $pageSlug = null, $productSlug = null, $lang = null)
    {
        if (empty($lang)) {
            $manyLangs = false;
            $lang = $this->langs[0];
        } else {
            $manyLangs = true;
        }
        App::setLocale($lang);

        $menus = $this->menus;

        $isCache = $this->configService->isCacheEnable();
        if ($isCache) {
            $pageOut = cache()->remember('page_'.$menuSlug.'_'.$pageSlug.'_'.$lang, CacheService::setTime(), function () use ($menus, $menuSlug, $pageSlug, $lang) {
                return PageService::getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
            });
        } else {
            $pageOut = PageService::getPageBySlug($menus, $menuSlug, $pageSlug, $lang);
        }

        $this->validatePage($pageOut);

        $data = $this->pageService->getDataToView($pageOut, [
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        if ($productSlug) { // product page
            $product = $this->productService->getProductBySlug($productSlug, $lang);
            if (empty($product)) {
                abort(404);
            }
            if (empty($product->published)) {
                abort(404);
            }

            $urls = $this->productService->getProductUrls($product);
            $data['url_category'] = $urls['url_category'];
            // $data['url_product'] = $urls['url_product'];
            $product = $this->productService->getProductDataByProductArr($product);
            $data['product'] = $product;
            $data['h1'] = $product['product_name'][$lang];
            $data['product_name'] = $product['product_name'];
            $data['product_name_slug'] = $product['product_name_slug'];
            $data['page_title'] = $product['product_name'][$lang] ?? config('app.name', 'cmsRS');
            $data['seo_description'] = $product['product_description'][$lang] ?? config('app.name', 'cmsRS');
        }

        if ($manyLangs) {
            return $data;
        }

        return view($data['view'], $data);
    }

    public function getSeparatePageLangs($lang, $pageSlug)
    {
        $data = $this->getSeparatePage($pageSlug, $lang);

        return view($data['view'], $data);
    }

    public function getSeparatePage($pageSlug, $lang = null)
    {
        if (empty($lang)) {
            $manyLangs = false;
            $lang = $this->langs[0];
        } else {
            $manyLangs = true;
        }
        App::setLocale($lang);

        $pageOut = null;
        $pages = Page::all();
        foreach ($pages as $page) {
            if ($this->pageService->getSlugByLang($page, $lang) == $pageSlug) {
                $pageOut = $page;
                break;
            }
        }
        $this->validatePage($pageOut);

        $data = $this->pageService->getDataToView($pageOut, [
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        if ($manyLangs) {
            return $data;
        }

        return view($data['view'], $data);
    }
}
