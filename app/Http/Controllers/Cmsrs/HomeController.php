<?php

namespace App\Http\Controllers\Cmsrs;

use App\Http\Controllers\Controller;
use App\Services\Cmsrs\BaseService;
use App\Services\Cmsrs\CheckoutService;
use App\Services\Cmsrs\ConfigService;
use App\Services\Cmsrs\MenuService;
use App\Services\Cmsrs\OrderService;
use App\Services\Cmsrs\PageService;
use App\Services\Cmsrs\ProductService;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller implements HasMiddleware
{
    private $menus;

    private $langs;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(
        protected ConfigService $configService,
        protected MenuService $menuService,
        protected PageService $pageService,
        protected ProductService $productService,

    ) {
        // $lang = Config::getLangFromSession();  //not working proper
        // App::setLocale($lang);

        $this->menus = MenuService::getMenu(); // $menus;
        $this->langs = $this->configService->arrGetLangs();
    }

    /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return [
            new Middleware('auth'),
        ];
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($lang = null)
    {
        $page = PageService::getFirstPageByType('home');
        if (! $page) {
            Log::error('if you want this page you have to add page in type home');
            abort(404);
        }

        if (empty($lang)) {
            $lang = $this->langs[0];
        }
        App::setLocale($lang);

        $user = Auth::user();
        $arrOrders = OrderService::inOrdersByUserId($user->id)->toArray();
        $orders = [];
        if (! empty($arrOrders)) {
            $arrOrdersReindex = BaseService::reIndexArr($arrOrders, 'product_id');
            $baskets = false;
            ProductService::getDataToPayment($arrOrdersReindex, $baskets, $orders);
        }

        $objCheckouts = CheckoutService::findActiveOrders()->get();
        $checkouts = CheckoutService::printCheckouts($objCheckouts, $lang);

        $data = $this->pageService->getDataToView($page, [
            'checkouts' => $checkouts,
            'orders' => $orders,
            'lang' => $lang,
            'langs' => $this->langs,
            'menus' => $this->menus,
        ]);

        return view('cmsrs.home', $data);
    }
}
