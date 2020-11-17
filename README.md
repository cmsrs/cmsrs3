# INSALLATION

* download
> 
> ```bash
> git clone https://github.com/cmsrs/cmsrs3.git
> cd cmsrs3
> ```
>
* install dependency
> 
> ```bash
> composer install
> ```
>
* set database config in file .env
> 
> create user and database
> ```bash
> sudo mysql --default-character-set=utf8 -e  "CREATE USER 'cmsrs'@'localhost' IDENTIFIED BY 'secret102*';"
> sudo mysql --default-character-set=utf8 -e  "GRANT ALL PRIVILEGES ON *.* TO 'cmsrs'@'localhost' WITH GRANT OPTION;"
> sudo mysql --default-character-set=utf8 -e  "CREATE DATABASE cmsrs3g CHARACTER SET utf8 COLLATE utf8_general_ci;"
> ```
> 
> ```bash
> cp .env.example .env
> ```
>
> change in file .env:
> 
> ```bash
> APP_NAME=cmsRS
> APP_URL=http://127.0.0.1:8000
> DB_DATABASE=cmsrs3g
> DB_USERNAME=cmsrs
> DB_PASSWORD="secret102*"
>
> ADM_EMAIL="adm@cmsrs.pl"
> ADM_PASS="cmsrs123"
> ```
>
* laravel and jwt config (create tokens):
>
> ```bash
> php artisan key:generate && php artisan jwt:secret
> ```
> 
* create database tables and create admin user (email: adm@cmsrs.pl, pass: cmsrs123) 
>
> ```bash
> php artisan migrate  && php artisan db:seed
> ```
> 
* set permission 
> 
> ```bash
> ./go_privilege.sh
> ```
> 
* start server
> 
> ```bash
> php artisan serve
> ```
> 
# RUN TESTS

* prepare testing:

```bash
sudo mysql --default-character-set=utf8 -e  "CREATE DATABASE cmsrs3g_testing CHARACTER SET utf8 COLLATE utf8_general_ci;"
cp .env .env.testing 
```
 
change in file .env.testing:

```bash
DB_DATABASE=cmsrs3g_testing
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
API_SECRET="v3"
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


# CLI COMMAND 

* load test (demo) data: 

```bash
php artisan command:load-demo-data
```


* create sitemap: 

```bash
php artisan command:create-site-map
```


# MANAGMENT

* go to the website /admin:

    log in as:

    username: adm@cmsrs.pl

    password: cmsrs123

* add menu
    
* add pages
   
* upload images

* go to the main page and see the front page

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

