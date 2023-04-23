<p align="center">
    <img src="http://www.cmsrs.pl/images/cms/logo_cmsrs.png"><br/>
    Multilingual CMS system with online shop module 
</p>
</br>
</br>
</br>

# INSTALLATION (Recommended Method)

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git
cd cmsrs3
```

* create user and database

you can run the following script:
```bash
./go_create_user_and_db.sh
```
 
* change file .env:
 
```bash
cp .env.cmsrs .env
```

* install dependency

```bash
composer install
```

* laravel and jwt config (create tokens):

```bash
php artisan key:generate && php artisan jwt:secret
```
 
* create database tables and create admin user (email: adm@cmsrs.pl, pass: cmsrs123) 

```bash
php artisan migrate  && php artisan db:seed
```
 
* set permission 
 
```bash
./go_privilege.sh
```
 
* start server
 
```bash
php artisan serve
```


# INSTALLATION BY COMPOSER

```bash
composer create-project cmsrs/cmsrs3
```

* configure db connection - change .env file.

```bash
php artisan key:generate && php artisan jwt:secret
```

```bash
php artisan migrate && php artisan db:seed
```

```bash
./go_privilege.sh
```

```bash
php artisan serve
```


# QUICK INSTALLATION

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git && cd cmsrs3
```

* run script 

```bash
./go_install.sh
```

# RUN TESTS

* prepare testing:

create user and database, you can run the following script:
```bash
./go_create_test_db.sh
cp .env .env.testing 
```
 
change in file .env.testing:

```bash
APP_ENV=testing
DB_DATABASE=cmsrs_testing
LANGS="en"
CACHE_ENABLE=false
```

* run tests: 

It is recommended to run tests on a clean instance (without images)

```bash
./go_privilege.sh
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
If you don't set up this directive it will be 'en'

* add api secret, example:
```bash
API_SECRET=""
```

It must be the same like in the admin config file (see React).
It can be empty string.

* (optionally) set available page type that appear in the administration area: 

The default page types are:
```bash
PAGE_TYPES="cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner"
```


    - cms - apear Wyswig editor in administration area
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
 
* (optionally) enable database cache: 

```bash
CACHE_ENABLE=true
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

* (optionally) change the default login/pass admin and client:


```bash
ADM_EMAIL='adm@cmsrs.pl'
ADM_PASS='cmsrs123'
CLIENT_EMAIL='client@cmsrs.pl'
CLIENT_PASS='cmsrs456'
```

run:

```bash
php artisan db:seed
```


# TROUBLESHOOTING

* logs:

```bash
tail -f -n0 storage/logs/*
```

# CLI COMMANDS 

* load test (demo) data: 

```bash
./go_clear_and_load_demo.sh
```

* create sitemap (it is recommended to put this command in the crontab file): 

```bash
php artisan command:create-site-map
```

# DEMO

http://demo.cmsrs.pl

# TUTORIALS

https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

# MORE INFORMATION

https://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

# REACT SOURCE CODE

https://github.com/cmsrs/cmsrs3-react
