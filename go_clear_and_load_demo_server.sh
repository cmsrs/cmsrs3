rm -rf public/images/page
rm -rf public/images/product
#./go_privilege.sh 

php73 artisan migrate:refresh
php73 artisan db:seed
php73 artisan command:load-demo-data
