# cmsRS


1.
composer install


2.
create vhost


3.
chmod -R 777 storage
chmod -R 777 bootstrap/cache


4. set database config in file .env


5.
php artisan key:generate
php artisan jwt:secret


6.
php artisan migrate


7.
run tests
./vendor/bin/phpunit


logs:
tail -f -n0 /var/log/apache2/cmsrs* storage/logs/*



