sudo rm -rf public/images/page
sudo rm -rf public/images/product
./go_privilege.sh 
#./go_create_admin.sh


./go_clear_all_cache.sh
php artisan migrate:fresh
php artisan db:seed
php artisan command:load-demo-data

