# cmsRS


* composer install

* create vhost

* permission

chmod -R 777 storage
chmod -R 777 bootstrap/cache

* set database config in file .env

* laravel and jwt config:

```bash
php artisan key:generate
php artisan jwt:secret
```bash

* migrate

php artisan migrate


* run tests

./vendor/bin/phpunit

* logs:
tail -f -n0 /var/log/apache2/cmsrs* storage/logs/*



