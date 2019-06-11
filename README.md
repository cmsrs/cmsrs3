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

* run tests

```bash
./vendor/bin/phpunit
```

* logs:

```bash
tail -f -n0 /var/log/apache2/cmsrs* storage/logs/*
```

* create admin user (add RS_SECRET to .env and .env.testing e.g. RS_SECRET=cmsrs1234)

```bash
./go_create_admin.sh
```
