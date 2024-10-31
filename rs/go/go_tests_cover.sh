rm -rf ../_cover
mkdir  ../_cover
#./vendor/bin/phpunit --coverage-html  ../_cover/
XDEBUG_MODE=coverage  ./vendor/bin/phpunit --coverage-html ../_cover/
