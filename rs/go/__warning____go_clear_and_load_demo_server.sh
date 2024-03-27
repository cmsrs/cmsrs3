rm -rf public/images/page
rm -rf public/images/product
#./go_privilege.sh 


./rs/go/go_clear_all_cache_server.sh
php81 artisan migrate:fresh
php81 artisan db:seed
php81 artisan command:load-demo-data

php81 artisan  cache:clear
php81  artisan command:create-site-map

