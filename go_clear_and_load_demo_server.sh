rm -rf public/images
mkdir  public/images
#./go_privilege.sh 

php73 artisan migrate:refresh
php73 artisan db:seed
php73 artisan command:load-demo-data
