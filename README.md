<p align="center">
    <img src="http://www.cmsrs.pl/images/cms/logo_cmsrs.png"><br/>
    Multilingual CMS system with online shop module 
</p>
</br>
</br>
</br>



# QUICK INSTALLATION

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git && cd cmsrs3
```

* run script 

```bash
./go_install.sh
```

# INSALLATION

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git
cd cmsrs3
```

* create user and database

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

# RUN TESTS

* prepare testing:

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
 
# CONFIGURATION .env FILE

* add langs, example:

```bash
LANGS="pl,en"
```

The first one will be default language.
You have to add at least one lang (it is require)

* add api secret, example:
```bash
API_SECRET=""
```

It must be the same like in the admin config file.
It can be empty string.

* (optionally) set avaliable page type that appear in the administration area: 

If not set the list is:
```bash
PAGE_TYPES="cms,gallery,shop,contact,main_page,privacy_policy,login,projects,clear,checkout,register,home,shoppingsuccess,search,forgot,inner"
```

In the most of this page type is regular page like: 'login', 'privacy_policy', 'main_page'
Exception is:

    - cms - apear Wyswig editor
    - clear - without Wyswig editor, it require write pure html code
    - inner - it is text box in exsitting page require hardcode in layout page, whre key is short_title
    - gallery - page this photos
    - projects - the same content in each langs



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

# MANAGMENT

* go to the website http://127.0.0.1:8000/admin/

    log in as:

    username: adm@cmsrs.pl

    password: cmsrs123

* create main page (page type: main_page)

* add menu
    
* add pages
   
# DEMO

http://demo.cmsrs.pl

# TUTORIALS

https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

# MORE INFORMATION

https://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

# REACT SOURCE CODE

https://github.com/cmsrs/cmsrs3-react
