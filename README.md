<p align="center">
    <img src="http://www.cmsrs.pl/images/cms/logo_cmsrs.png"><br/>
    Multilingual CMS system with online shop module 
</p>
</br>
</br>
</br>

# INSTALLATION

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git
cd cmsrs3
```

* prepare .env file, and change db connection:
 
```bash
cp .env.example .env
```

change db connection, for example:

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cmsrs
DB_USERNAME=rs
DB_PASSWORD="secret102*"
```

* install dependency

```bash
composer install
```

* laravel and jwt config (create tokens):

```bash
php artisan key:generate && php artisan jwt:secret
```
 
* create database tables and create: 

    - admin (email: adm@cmsrs.pl, pass: cmsrs123) 
    - client (email: client@cmsrs.pl, pass: cmsrs456) 

```bash
php artisan migrate  && php artisan db:seed
```
 
* (optionally) set permission 
 
```bash
./rs/go/go_privilege.sh
```
 
* start server
 
```bash
php artisan serve
```

# RUN TESTS

* prepare .env.testing file, and change db connection:

```bash
cp  .env.example .env.testing 
```

change db connection, for example:

Attention! DB_DATABASE should be different than the one in the .env file.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=cmsrs_testing
DB_USERNAME=rs
DB_PASSWORD="secret102*"
```

* (optionally) set permission 
 
```bash
./rs/go/go_privilege.sh
```

* run tests: 

It is recommended to run tests on a clean instance (without images)

```bash
./vendor/bin/phpunit
```

# MANAGMENT

* go to the website http://127.0.0.1:8000/admin/

    log in as:

    username: adm@cmsrs.pl

    password: cmsrs123

* create main page (page type: main_page)

* add menu
    
* add pages   
 
# CONFIGURATION .env FILE

*  (optionally) set up langs, example:

```bash
LANGS="pl,en"
```

The first one will be default language.
If you don't set up this directive it will be 'en,pl'

* add api secret, the default is '':
```bash
API_SECRET=""
```

It must be the same like in the admin config file (see Vue.js).
It can be empty string.

* (optionally) set available page type that appear in the administration area: 

The default page types are:
```bash
PAGE_TYPES="cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner"
```


    - cms - appear Wyswig editor in administration area
    - clear - without Wyswig editor, it require write pure html code
    - inner - it is text box in existing page require hardcode in layout page, where key is short_title
    - gallery - page with photos
    - projects - the same content in each langs


* (optionally) additionally sending an e-mail with information from the contact form.
If the value is empty, the text of the message will appear only in the administration panel in the contact tab

```bash
CONTACT_EMAIL=""
```


* (optionally) for google v3 reCaptcha in the contact form: 

```bash
GOOGLE_RECAPTCHA_PRIV
GOOGLE_RECAPTCHA_PUBLIC
```
 
* (optionally) enable database cache, the default is false: 

```bash
CACHE_ENABLE=true
```

* (optionally) set the currency, the default is USD:

```bash
CURRENCY=PLN
```

* (optionally) set is_shop, the default is true:

```bash
IS_SHOP=true
```

* (optionally) PayU integration:

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

# TROUBLESHOOTING

* logs:

```bash
tail -f -n0 storage/logs/*
```

# CLI COMMANDS 

* load test (demo) data: 

**I highly recommend running this script in order to understand how my CMS works.**

```bash
./rs/go/go_clear_and_load_demo.sh
```

* create sitemap (it is recommended to put this command in the crontab file): 

```bash
php artisan command:create-site-map
```

* create client user or edit password for user: 

```bash
php artisan command:create-client {user} {password}
```

# DEMO

http://demo.cmsrs.pl

# TUTORIALS

https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

# MORE INFORMATION

https://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

# VUEJS SOURCE CODE 

https://github.com/cmsrs/cmsrs3-vuejs
