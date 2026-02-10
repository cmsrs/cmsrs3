current_dir=$(pwd)

# Sprawdź, czy katalog zawiera słowo 'demo'
if [[ "$current_dir" != *"demo"* ]]; then
  echo "not allowed!"
  exit 1
fi

rm -rf public/images/page
rm -rf public/images/product
#./go_privilege.sh 


./rs/go/go_clear_all_cache_server.sh
php85 artisan migrate:fresh
php85 artisan db:seed
php85 artisan cmsrs:load-demo-data

php85 artisan cache:clear
php85 artisan cmsrs:create-site-map
php85 artisan cmsrs:create-cache-enable-file

