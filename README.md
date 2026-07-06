<p align="center">
    <img src="http://www.cmsrs.pl/images/cms/logo_cmsrs.png"><br/>
    Modern CMS for websites and galleries, and even stores, without the chaos.
</p>
</br>
<p align="center">
<a href="https://www.php.net/"><img src="https://img.shields.io/badge/php-8.5-yellowgreen"></a>
<a href="https://github.com/laravel/laravel"><img src="https://img.shields.io/badge/Laravel-13-yellowgreen"></a>
<a href="https://www.cmsrs.pl/en/cms/cmsrs/coverage-test"><img src="https://img.shields.io/badge/coverage-90%25-yellowgreen"></a>
<a href="#"><img src="https://img.shields.io/badge/PHPStan-8-yellowgreen"></a>
<a href="https://github.com/cmsrs/cmsrs3/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green"></a>
</p>
</br>
</br>

<p>
    <b>cmsRS</b> is a modern, open-source CMS built for developers who value clean code and maintainability. It combines the power of <b>Laravel</b> and <b>Vue.js</b> into a lightweight, fully-tested framework—offering a refreshing alternative to bloated systems. Whether you need a multi-language site, a gallery, or an online store with PayU integration, cmsRS provides a <b>transparent and predictable foundation that respects your time</b>. The architecture is simple, the database schema is logical, and updates are predictable thanks to extensive test coverage.
</p>
<p>
    <a href="https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-installation">🚀 Install</a> | 
    <a target="_blank" href="https://www.cmsrs.pl/en/cms/cmsrs/demo-version">🌐 Demo</a>
</p>

</br>

<div>
    <img width="400" alt="admin panel - cmsRS" src="./rs/intro_imgs/s1.png">
    <img width="400" alt="frontend - cmsRS" src="./rs/intro_imgs/s6.png">
</div>

</br>

## 🤔 Why cmsRS?

Unlike traditional CMS platforms:
- No legacy chaos
- Predictable updates thanks to tests
- Developer-first architecture
- Simple and logical database schema


## ✨ Features

- ⚡ Laravel + Vue.js architecture
- 🌍 Multi-language support
- 🛒 Products managements
- 🖼️ Gallery system
- 🔐 Auth system (login/register)
- 🧪 90% test coverage
- 🧠 Clean and predictable architecture


## Technological diagram of cmsRS: Laravel (backend) + Vue.js or Nuxt (frontend) with communication via REST API

![cmsRS diagram technolgy](./rs/readme_imgs/cmsrs_diagram_320.svg)

<ul>
<li>(1) <a href="https://github.com/cmsrs/cmsrs3" target="_blank">GitHub – cmsrs3 (Laravel) - Serwer</a></li>
<li>(2) <a href="https://github.com/cmsrs/cmsrs3-vuejs" target="_blank">GitHub – cmsrs3-vuejs - Admin Panel</a></li>
<li>(3) <a href="https://github.com/cmsrs/cmsrs3-nuxt" target="_blank">GitHub – cmsrs3-nuxt - Frontend Nuxt</a></li>
</ul>


## REQUIRED PACKAGES

```php-cli``` – PHP command-line interface

```php-dom``` and ```php-xml``` – for XML parsing (used in layouts and configs)

```php-curl``` – for HTTP requests

```php-mysql``` – for MySQL database connection

```php-mbstring``` – for multibyte string support (required by PHPUnit and some packages)

```php-gd``` – for image processing (used in gallery, sliders, etc.)

Make sure all extensions match your installed PHP version (e.g., php8.5-mysql, php8.5-mbstring, etc.)

## INSTALLATION (RECOMMENDED - QUICK SETUP)

Before running the script, make sure you have configured the database connection (host, database name, username, password, and port).

Run the following command to create the project:

```bash
composer create-project cmsrs/cmsrs3
cd cmsrs3 
php artisan cmsrs:install
php artisan serve
```

Once the server is running, open your browser and navigate to:

```bash
http://127.0.0.1:8000
```


## RUN TESTS (RECOMMENDED)

* Prepare .env.testing file, and change db connection:

Attention! DB_DATABASE should be different than the one in the .env file.

```bash
cp  .env .env.testing 
```

* run tests: 

```bash
./vendor/bin/phpunit
```

## MANAGEMENT

* Go to the website http://127.0.0.1:8000/admin/

    log in as:

    username: adm@cmsrs.pl

    default password: cmsrs123

* Create main page (page type: **main_page**)

* Add menu
    
* Add pages   


## CLI COMMANDS 

* Create sitemap (it is recommended to put this command in the crontab file): 

```bash
php artisan cmsrs:create-site-map
```

* Create client user or edit password for user: 

```bash
php artisan cmsrs:create-client {user} {password}
```

* Change admin password:

```bash
php artisan cmsrs:change-admin-pass {new-password}
```

## DEMO - Frontend

http://demo.cmsrs.pl

## DEMO - Admin Panel

http://demo.cmsrs.pl/admin-demo

## TUTORIALS

https://www.cmsrs.pl/en/cms/cmsrs/cmsrs-video-tutorial

## MORE INFORMATION

https://www.cmsrs.pl/en/cms/cmsrs/about-cmsrs


## REPORTING ISSUES AND SUGGESTIONS

If you notice any problems or have ideas to improve the project, please use the [Issues](https://github.com/cmsrs/cmsrs3/issues) section to let me know.
If you like it, give it a star!
Your support motivates me to keep improving the project. Thank you! :)

## CONTRIBUTING

Contributions are welcome!  
Feel free to open issues or submit pull requests.

## LICENSE

This project is licensed under the MIT License.