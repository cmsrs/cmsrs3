sudo rm -rf public/images
mkdir public/images
./go_privilege.sh 
#./go_create_admin.sh

php artisan migrate:fresh
php artisan db:seed
php artisan command:load-demo-data
