<p align="center">
    <img src="http://www.cmsrs.pl/images/cms/logo_cmsrs.png"><br/>
    CMS, gallery, and shop based on Laravel and Vue.js
</p>
</br>
<p align="center">
<a href="https://www.php.net/"><img src="https://img.shields.io/badge/php-8.4-yellowgreen"></a>
<a href="https://github.com/laravel/laravel"><img src="https://img.shields.io/badge/laravel-11-yellowgreen"></a>
<a href="https://www.cmsrs.pl/en/cms/cmsrs/coverage-test"><img src="https://img.shields.io/badge/coverage-90%25-yellowgreen"></a>
<a href="https://github.com/cmsrs/cmsrs3/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green"></a>
</p>
</br>
</br>

## INSTALLATION (QUICK SETUP)

Run the following command to create the project:

```bash
composer create-project cmsrs/cmsrs3
cd cmsrs3 && php artisan serve
```

Make sure the ```php-sqlite3``` extension is installed and enabled.

## MANUAL INSTALLATION

* Download the source code:
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git && cd cmsrs3
```

* Install dependencies:

```bash
composer install
```

* Prepare .env file, and change db connection:
 
```bash
cp .env.example .env
```

change db connection in .env file, for example:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cmsrs
DB_USERNAME=rs
DB_PASSWORD="secret102*"
```

You can create a MySQL user and database using the script: ``` ./rs/go/go_create_user_and_db.sh ```

* Set up Laravel and JWT (generate the application key and JWT secrets):

```bash
php artisan key:generate && php artisan jwt:secret
```
 
* Create database tables and seed initial data:

    - admin (email/login: adm@cmsrs.pl, pass: cmsrs123) 
    - client (email/login: client@cmsrs.pl, pass: cmsrs456) 

```bash
php artisan migrate && php artisan db:seed
```
 
* (optionally) Set up permission: 
 
```bash
./rs/go/go_privilege.sh
```
 
* Start server
 
```bash
php artisan serve
```

## RUN TESTS

* Prepare .env.testing file, and change db connection:

```bash
cp  .env .env.testing 
```

Change db connection in .env.testing file, for example:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cmsrs_testing
DB_USERNAME=rs
DB_PASSWORD="secret102*"
```

Attention! DB_DATABASE should be different than the one in the .env file.

You can create a MySQL database using the script ``` ./rs/go/go_create_test_db.sh ```

* (optionally) set permission 
 
```bash
./rs/go/go_privilege.sh
```

* run tests: 

It is recommended to run tests on a clean instance (without images)

```bash
./vendor/bin/phpunit
```

## MANAGMENT

* Go to the website http://127.0.0.1:8000/admin/

    log in as:

    username: adm@cmsrs.pl

    password: cmsrs123

* Create main page (page type: main_page)

* Add menu
    
* Add pages   
 
## CONFIGURATION .env FILE

**After each change to a configuration value, it is necessary to log in to the admin panel again.**

*  Set up langs, the default is 'en,pl':

```bash
LANGS="en,pl"
```

The first one will be default language.
If you don't set up this directive it will be 'en,pl'

* Add api secret, the default is '':
```bash
API_SECRET=""
```

It must be the same like in the admin config file (see Vue.js).
It can be empty string.

* Set available page type that appear in the administration area: 

The default page types are:
```bash
PAGE_TYPES="cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner"
```

    - cms - appear Wyswig editor in administration area
    - clear - without Wyswig editor, it require write pure html code
    - inner - it is text box in existing page require hardcode in layout page, 
        where key is short_title, example using in code: 
        (new PageService)->getPageDataByShortTitleCache('main_page_box1', 'content');

        The following short_title values are predefined:
        - main_page_box1, main_page_box2, main_page_box3 – these represent three content boxes on the main page
        - company_data – displays company information on the contact page
        - main_page_slider – contains images displayed in the slider on the main page

    - gallery - page with photos
    - projects - the same content in each langs


* Additionally sending an e-mail with information from the contact form.
If the value is empty, the text of the message will appear only in the administration panel in the contact tab

```bash
CONTACT_EMAIL=""
```

* For Google reCAPTCHA v3 in the contact form, set up the following parameters:

```bash
GOOGLE_RECAPTCHA_PRIV
GOOGLE_RECAPTCHA_PUBLIC
```
 
* Enable database cache, the default is false: 

```bash
CACHE_ENABLE=false
```

* Set the currency, the default is USD:

```bash
CURRENCY=USD
```

* Set is_shop, the default is true:

```bash
IS_SHOP=true
```

* Set the allowed file extensions for uploads:

The default file extensions for uploads are:
```bash
PAGE_TYPES="jpg,jpeg,png,gif"
```

* PayU integration:

```bash
#https://merch-prod.snd.payu.com - sandbox
PAYU_URL=https://merch-prod.snd.payu.com
PAYU_POS_ID=123
PAYU_MD5=xxx
PAYU_CLIENT_ID=123
PAYU_CLIENT_SECRET=zzz
NOTIFY_URL=http://domain/home/orders
CUSTOMER_IP="123.123.123.123"
```

## SAMPLE .env CONFIGURATION FOR COMPANY PROFILE PAGE

If you want to create a company profile page, I suggest setting the following CMS parameters, for example:

```bash
IS_SHOP=false
LANGS="en"
API_SECRET="string123"
PAGE_TYPES="cms,gallery,contact,main_page,privacy_policy,inner,clear"
```

## CLI COMMANDS 

* Load test (demo) data: 

**I highly recommend running this script to understand how my CMS works. (Remember to leave the default values in the .env file.)**

```bash
./rs/go/go_clear_and_load_demo.sh
```

* Create sitemap (it is recommended to put this command in the crontab file): 

```bash
php artisan cmsrs:create-site-map
```

* Create client user or edit password for user: 

```bash
php artisan cmsrs:create-client {user} {password}
```

* Change admin password:

```bash
php artisan cmsrs:change-admin-pass {new-password}
```

## DEMO - Frontend

http://demo.cmsrs.pl

## DEMO - Admin Panel

http://demo.cmsrs.pl/admin-demo

## TUTORIALS

https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

## MORE INFORMATION

https://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

## VUE.JS SOURCE CODE 

https://github.com/cmsrs/cmsrs3-vuejs

## Reporting Issues and Suggestions

If you notice any problems or have ideas to improve the project, please use the Issues section [Issues](https://github.com/cmsrs/cmsrs3/issues) to let me know. Thank you for your support!
