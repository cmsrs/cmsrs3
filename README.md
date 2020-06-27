# INSALLATION:

* download
> 
> ```bash
> git clone https://github.com/cmsrs/cmsrs3.git
> cd cmsrs3
> ```
>
* install dependency

```bash
composer install
```

* set database config in file .env
> 
> create user and database
> ```bash
> sudo mysql --default-character-set=utf8 -e  "CREATE USER 'cmsrs'@'localhost' IDENTIFIED BY 'AlaMaKota95*';"
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
> DB_PASSWORD="AlaMaKota95*"
> ```
>
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

* optionally - testing


prepare testing:
```bash
sudo mysql --default-character-set=utf8 -e  "CREATE DATABASE cmsrs3g_testing CHARACTER SET utf8 COLLATE utf8_general_ci;"
cp .env .env.testing 
```

change in file .env.testing:

```bash
DB_DATABASE=cmsrs3g_testing
```

run tests

```bash
./vendor/bin/phpunit
```

* start server

```bash
php artisan serve
```

# TROUBLESHOOTING

* logs:

```bash
tail -f -n0 storage/logs/*
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

Tutorial:

http://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

===

More information:

http://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs

===

React source code:

https://github.com/cmsrs/cmsrs3-react
