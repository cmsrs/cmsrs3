for f in ./tests/Feature/*Test.php; do
    echo "----Test-------- $f"
    ./vendor/bin/phpunit $f
done
