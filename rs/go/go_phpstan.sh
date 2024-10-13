echo "app/"
./vendor/bin/phpstan analyse app/

echo "config/"
./vendor/bin/phpstan analyse config/

echo  "routes/"
./vendor/bin/phpstan analyse routes/

echo "database/"
./vendor/bin/phpstan analyse database/
