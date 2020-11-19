rm -rf public/images/page
rm -rf public/images/product
#./go_privilege.sh 

php74 artisan migrate:fresh
php74 artisan db:seed
php74 artisan command:load-demo-data

php74 artisan  cache:clear
php74  artisan command:create-site-map
