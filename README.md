# cmsRS


* install dependency

```bash
composer install
```

* create vhost

* permission

```bash
chmod -R 777 storage
chmod -R 777 bootstrap/cache
```

* set database config in file .env and .env.testing

* laravel and jwt config:

```bash
php artisan key:generate
php artisan jwt:secret
```

* migrate

```bash
php artisan migrate
```

* create admin user (add RS_SECRET to .env and .env.testing e.g. RS_SECRET=cmsrs1234)

```bash
./go_create_admin.sh
```

* run tests

```bash
./vendor/bin/phpunit
```

* logs:

```bash
tail -f -n0 /var/log/apache2/cmsrs* storage/logs/*
```

* go to the website /admin:

    Add menu
    
    Add pages
    
    Upload images
    

* go to the website /
  and see the front page

