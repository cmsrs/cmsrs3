<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Integration\Payu;
use App\Models\Cmsrs\Checkout;
use App\Models\Cmsrs\Menu;
use App\Models\Cmsrs\Page;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\DeliverService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\PaymentService;
use App\Services\Cmsrs\ProductService;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class FrontController extends Controller
{
    /**
     * @var Collection<int, Menu>
     */
    private $menus;

    /**
     * @var array<int, string>
     */
    private $langs;

    public function __construct(
        protected ConfigService $configService,
        protected DeliverService $deliverService,
        protected MenuService $menuService,
        protected PageService $pageService,
        protected PaymentService $paymentService,
        protected ProductService $productService,
    ) {
        $this->menus = $this->menuService->getMenu(); // $menus;
        $this->langs = $this->configService->arrGetLangs();
    }

    /**
     * @return void
     */
    private function validatePage(?Page $page)
    {
        if (empty($page)) {
            abort(404);
        }

        if (! $this->pageService->checkAuth($page)) {
            abort(401);
        }
    }

    private function validateLangs(?string $lang): string
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        $this->validateLang($lang);

        App::setLocale($lang);

        return $lang;
    }

    private function validateLang(?string $lang): void
    {
        // it is useless because route validation to do it - it can be deleted - but i want to keep it for now
        if (! in_array($lang, $this->langs)) {
            abort(404);
        }
    }

    public function search(Request $request, ?string $lang = null): View
    {
        $lang = $this->validateLangs($lang);

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

    public function shoppingsuccess(Request $request, ?string $lang = null): View
    {
        $lang = $this->validateLangs($lang);

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

    public function checkout(Request $request, ?string $lang = null): View
    {
        $lang = $this->validateLangs($lang);

        App::setLocale($lang);

        $payments = PaymentService::getPayment();
        $delivers = $this->deliverService->getDeliver();

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

    public function postCheckout(Request $request): RedirectResponse|JsonResponse
    {
        $lang = $request->input('lang');
        $this->validateLang($lang);
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
            $isManyLangs = $this->configService->isManyLangs();
            $urlShoppingSuccess = $isManyLangs ? route('shoppingsuccess', ['lang' => $lang]) : route('shoppingsuccess');

            /** @var Store $session */
            $session = $request->session();
            $session->flash('checkout_id', $objCheckout->id);

            return redirect($urlShoppingSuccess);
        }

    }

    public function index(?string $lang = null): View
    {
        if ((count($this->langs) > 1) && $lang == $this->langs[0]) {
            abort(404);
        }

        $lang = $this->validateLangs($lang);

        // todo - http_referer - i don't know how to obtain this value - it should be from payu
        // it make sense only for payU - it my opinion
        $isNewOrders = false; // Order::copyDataFromBasketToOrderForUser();

        $page = $this->pageService->getMainPage();
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

    public function getPageLangs(string $lang, string $menuSlug, ?string $pageSlug = null, ?string $productSlug = null): View
    {
        $data = $this->getPageData($lang, $menuSlug, $pageSlug, $productSlug);

        if (!isset($data['view'])) {
            abort(500, 'array key view is not set in data to view');
        }

        return view($data['view'], $data);
    }

    /**
     * @return array<string, mixed>
     */
    private function getPageData(string $lang, string $menuSlug, ?string $pageSlug = null, ?string $productSlug = null): array
    {
        $pageOut = $this->pageService->getPageBySlugCache($this->menus, $menuSlug, $pageSlug, $lang);
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

            $productDataArr = $this->productService->getProductData($product, $lang);
            $data = array_merge($data, $productDataArr);
        }

        return $data;
    }

    public function getPage(?string $menuSlug, ?string $pageSlug = null, ?string $productSlug = null, ?string $lang = null): View
    {
        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $data = $this->getPageData($lang, $menuSlug, $pageSlug, $productSlug);

        return view($data['view'], $data);
    }

    public function getSeparatePageLangs(string $lang, string $pageSlug): View
    {
        $data = $this->getSeparatePage($pageSlug, $lang);

        if (!isset($data['view'])) {
            abort(500, 'array key view is not set in data to view');
        }

        return view($data['view'], $data);
    }

    /**
     * @param  string  $pageSlug
     * @return View|array<string, mixed>
     */
    public function getSeparatePage($pageSlug, ?string $lang = null): View|array
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
