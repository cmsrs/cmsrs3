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

## REQUIRED PACKAGES

```php-cli``` – PHP command-line interface

```php-dom``` and ```php-xml``` – for XML parsing (used in layouts and configs)

```php-curl``` – for HTTP requests

```php-mysql``` – for MySQL database connection

```php-mbstring``` – for multibyte string support (required by PHPUnit and some packages)

```php-gd``` – for image processing (used in gallery, sliders, etc.)

⚠️ Note: Make sure all extensions match your installed PHP version (e.g., php8.3-mysql, php8.3-mbstring, etc.)


## INSTALLATION (QUICK SETUP)

Run the following command to create the project:

```bash
composer create-project cmsrs/cmsrs3
cd cmsrs3 && php artisan serve
```

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

<!--
#todo - add mysql auth - automatic
## INSTALLATION USING DOCKER

We are using SQLite as the database.

* Download the Dockerfile from the ```cmsrs/cmsrs3``` GitHub repository:

```bash
wget https://raw.githubusercontent.com/cmsrs/cmsrs3/master/Dockerfile
```

* Build the image based on the Dockerfile:

```bash
docker build -t php-cmsrs3 .
```

* Run the container:

```bash
docker run -p 8000:8000 php-cmsrs3
```
-->

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
PAGE_TYPES="cms,gallery,shop,contact,main_page,privacy_policy,projects,clear,inner"
```

    - cms: Displays a WYSIWYG editor in the administration area.
    - gallery: A page for showcasing photos.
    - shop: A page for displaying products.
    - contact: A page with contact information.
    - main_page: The main page, which requires writing pure HTML code.
    - privacy_policy: A page containing the privacy policy.
    - projects: Displays the same content across all languages.
    - clear: A page without a WYSIWYG editor; requires writing pure HTML code.
    - inner: Represents a text box on an existing page that requires hardcoding in the layout. The key is the short_title. For example, in the code:
        (new PageService)->getPageDataByShortTitleCache('main_page_box1', 'content');
        The following short_title values are predefined:
            - main_page_box1, main_page_box2, main_page_box3: Represent three content boxes on the main page.
            - company_data: Displays company information on the contact page.
            - main_page_slider: Contains images displayed in the slider on the main page, It requires adding a <div class='slidecontainer'></div> element to the main page.


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
CACHE_ENABLE_FILE='app/cache_enable.txt'
```

* Set the currency, the default is USD:

```bash
CURRENCY=USD
```

* Set is_shop, the default is true:

```bash
IS_SHOP=true
```

* Set is_login, the default is true:

```bash
IS_LOGIN=true
```

* Set is_register, the default is true:

```bash
IS_REGISTER=true
```

* Set the allowed file extensions for uploads:

The default file extensions for uploads are:
```bash
ALLOWED_UPLOAD_EXTENSIONS="jpg,jpeg,png,gif"
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

* Administrator Credentials

These credentials can be used to create the initial admin user during system installation (database seeding).

```bash
ADM_EMAIL="adm@cmsrs.pl"
ADM_PASS="cmsrs123"
```

```ADM_EMAIL```: The default email address of the admin account.
```ADM_PASS```: The default password for the admin account.

⚠️ Warning: Do not use the default credentials (adm@cmsrs.pl / cmsrs123) in production.
Always update them for security reasons before deploying.

* Client Account Credentials

These credentials can be used to create a default client account during system installation (e.g., for seeding or demo purposes).

```
CLIENT_EMAIL="client@cmsrs.pl"
CLIENT_PASS="cmsrs456"
```

```CLIENT_EMAIL```: The default email address for the client account.
```CLIENT_PASS```: The default password for the client account.

⚠️ Warning: Do not use the default client credentials (client@cmsrs.pl / cmsrs456) in production environments.
Always change them to secure values before deployment.


* DEMO Mode

Use this variable to enable demo mode, for example at http://demo.cmsrs.pl/
Used to block saving changes or modifying sensitive data on public demo instances.

```bash
DEMO_STATUS=false
```

Default is false (disabled).

* Pagination

```bash
PAGINATION=10
```

Number of items per page in the admin panel. The default value is 10.



## SAMPLE .env CONFIGURATION FOR COMPANY PROFILE PAGE

If you want to create a company profile page, I suggest setting the following CMS parameters, for example:

```bash
IS_SHOP=false
IS_LOGIN=false
IS_REGISTER=false
LANGS="en"
API_SECRET="string123"
PAGE_TYPES="cms,gallery,contact,main_page,privacy_policy,inner"
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

## REPORTING ISSUES AND SUGGESTIONS

If you notice any problems or have ideas to improve the project, please use the [Issues](https://github.com/cmsrs/cmsrs3/issues) section to let me know.
If you like it, give it a star!
Your support motivates me to keep improving the project. Thank you! :)

