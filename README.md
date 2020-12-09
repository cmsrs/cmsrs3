# QUICK INSTALLATION

* download
 
```bash
git clone https://github.com/cmsrs/cmsrs3.git
cd cmsrs3
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

* (optionally) for google v3 reCaptcha in the contact form: 

```bash
GOOGLE_RECAPTCHA_PRIV
GOOGLE_RECAPTCHA_PUBLIC
```
 
* (optionally) enable database cache: 

```bash
CACHE_ENABLE=true
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

* create sitemap: 

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
   
===

Demo:

http://demo.cmsrs.pl

===

More information:

http://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

===

Tutorial:

http://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

===

React source code:

https://github.com/cmsrs/cmsrs3-react
