sudo rm -rf public/images/page
sudo rm -rf public/images/product
./rs/go/go_privilege.sh 
#./go_create_admin.sh


./rs/go/go_clear_all_cache.sh
php artisan migrate:fresh
php artisan db:seed
php artisan command:load-demo-data
php artisan command:create-cache-enable-file

