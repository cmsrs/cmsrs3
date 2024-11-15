sudo rm -rf public/images/page
sudo rm -rf public/images/product
./rs/go/go_privilege.sh 
#./go_create_admin.sh


./rs/go/go_clear_all_cache.sh
php artisan migrate:fresh
php artisan db:seed

#without demo data - start (comment  this line)
php artisan cmsrs:load-demo-data
#without demo data - stop

php artisan cache:clear
php artisan cmsrs:create-site-map
php artisan cmsrs:create-cache-enable-file

