<?php

use App\Services\Cmsrs\ConfigService;

return [

    /*
    |--------------------------------------------------------------------------
    | Supported Languages
    |--------------------------------------------------------------------------
    | List of languages supported by the system.
    | The first one will be used as the default.
    | Default: 'en,pl'
    */
    // 'langs' => explode(',', env('LANGS', ConfigService::LANG_DEFAULT)),
    'langs' => env('LANGS', ConfigService::LANG_DEFAULT),

    /*
    |--------------------------------------------------------------------------
    | API Secret
    |--------------------------------------------------------------------------
    | Must match the value from the Vue.js admin config.
    | Can be an empty string.
    */
    'api_secret' => env('API_SECRET', ''),

    /*
    |--------------------------------------------------------------------------
    | Page Types
    |--------------------------------------------------------------------------
    | Available page types shown in the admin panel.
    | Default: "cms,gallery,shop,contact,main_page,privacy_policy,projects,clear,inner"
    |
    | Types:
    | - cms: WYSIWYG editor.
    | - gallery: Photo showcase page.
    | - shop: Product list page.
    | - contact: Contact information page.
    | - main_page: Pure HTML-based homepage.
    | - privacy_policy: Legal information page.
    | - projects: Language-independent content page.
    | - clear: Raw HTML page without editor.
    | - inner: Content box on a page. Controlled by `short_title`, e.g.:
    |       - main_page_box1, box2, box3: Boxes on main page.
    |       - company_data: Company info on contact page.
    |       - main_page_slider: Slider images on homepage.
    */
    // 'page_types' => explode(',', env('PAGE_TYPES', 'cms,gallery,shop,contact,main_page,privacy_policy,projects,clear,inner')),
    'page_types' => env('PAGE_TYPES', ConfigService::PAGE_TYPES_STR_DEFAULT),

    /*
    |--------------------------------------------------------------------------
    | Contact Email
    |--------------------------------------------------------------------------
    | Email address to receive contact form messages.
    | If empty, messages are stored only in the admin panel.
    */
    'contact_email' => env('CONTACT_EMAIL', ''),

    /*
    |--------------------------------------------------------------------------
    | Google reCAPTCHA v3
    |--------------------------------------------------------------------------
    | Credentials for reCAPTCHA used in contact form.
    */
    'recaptcha' => [
        'public' => env('GOOGLE_RECAPTCHA_PUBLIC'),
        'private' => env('GOOGLE_RECAPTCHA_PRIV'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Enable Caching
    |--------------------------------------------------------------------------
    | Enable database caching to improve performance.
    | Default: false
    */
    'cache_enabled' => env('CACHE_ENABLE', false),

    /*
    |--------------------------------------------------------------------------
    | Currency
    |--------------------------------------------------------------------------
    | Default currency used in the system.
    | Example: USD, EUR
    */
    'currency' => env('CURRENCY', ConfigService::CURRENCY_DEFAULT), // ConfigService::CURRENCY_DEFAULT

    /*
    |--------------------------------------------------------------------------
    | Feature Flags
    |--------------------------------------------------------------------------
    | Enable or disable system modules.
    */
    'features' => [
        'shop' => env('IS_SHOP', true),
        'login' => env('IS_LOGIN', true),
        'register' => env('IS_REGISTER', true),
    ],

    /*
    |--------------------------------------------------------------------------
    | Allowed Upload File Extensions
    |--------------------------------------------------------------------------
    | File types allowed for file uploads.
    | Default: jpg,jpeg,png,gif
    */
    // 'allowed_upload_extensions' => explode(',', env('ALLOWED_UPLOAD_EXTENSIONS', 'jpg,jpeg,png,gif')),
    'allowed_upload_extensions' => env('ALLOWED_UPLOAD_EXTENSIONS', 'jpg,jpeg,png,gif'),

    /*
    |--------------------------------------------------------------------------
    | PayU Integration
    |--------------------------------------------------------------------------
    | Configuration for PayU payments.
    | Use sandbox URL for testing: https://merch-prod.snd.payu.com
    */
    'payu' => [
        'url' => env('PAYU_URL', 'https://merch-prod.snd.payu.com'),
        'pos_id' => env('PAYU_POS_ID'),
        'md5' => env('PAYU_MD5'),
        'client_id' => env('PAYU_CLIENT_ID'),
        'client_secret' => env('PAYU_CLIENT_SECRET'),
        'notify_url' => env('NOTIFY_URL'),
        'customer_ip' => env('CUSTOMER_IP'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Administrator Credentials
    |--------------------------------------------------------------------------
    | Default credentials for the administrator account.
    | These can be used to automatically create an admin user during installation.
    | WARNING: Never use default credentials on production without changing them.
    */
    'admin' => [
        'email' => env('ADM_EMAIL', 'adm@cmsrs.pl'),
        'password' => env('ADM_PASS', 'cmsrs123'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Client Account Credentials
    |--------------------------------------------------------------------------
    | Default credentials for the client account.
    | These can be used to automatically create a client user during installation.
    | WARNING: Never use default credentials on production without changing them.
    */
    'client' => [
        'email' => env('CLIENT_EMAIL', 'client@cmsrs.pl'),
        'password' => env('CLIENT_PASS', 'cmsrs456'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Demo Mode Status
    |--------------------------------------------------------------------------
    | Enables or disables demo mode. When true, some features like saving
    | or deleting data may be restricted to prevent misuse.
    | Default is false.
    */
    'demo' => env('DEMO_STATUS', false),

    /*
    |--------------------------------------------------------------------------
    | Admin Panel Pagination Limit
    |--------------------------------------------------------------------------
    | Controls how many items are displayed per page in admin panel listings.
    | Default is 10.
    */
    'pagination' => env('PAGINATION', ConfigService::PAGINATION_DEFAULT),

    /*
    |--------------------------------------------------------------------------
    | File-Based Cache Toggle
    |--------------------------------------------------------------------------
    | Enables or disables file-based caching for selected operations (e.g. page data).
    | Default value is defined in ConfigService::CACHE_ENABLE_FILE_DEFAULT.
    */
    'cache_enable_file' => env('CACHE_ENABLE_FILE', ConfigService::CACHE_ENABLE_FILE_DEFAULT),

    /*
    |--------------------------------------------------------------------------
    | Frontend Mode
    |--------------------------------------------------------------------------
    | Determines the method of frontend rendering.
    | - 'false' => traditional SSR on the PHP server side
    | - 'true'   => headless, Nuxt.js frontend, page is not rendered on the server side (Nuxt.js/SPA mode)
    */
    'is_headless' => env('IS_HEADLESS', false),

];
