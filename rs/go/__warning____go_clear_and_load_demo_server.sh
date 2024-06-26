rm -rf public/images/page
rm -rf public/images/product
#./go_privilege.sh 


./rs/go/go_clear_all_cache_server.sh
php83 artisan migrate:fresh
php83 artisan db:seed
php83 artisan command:load-demo-data

php83 artisan  cache:clear
php83  artisan command:create-site-map

