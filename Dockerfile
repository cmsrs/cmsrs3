FROM php:8.4-cli

WORKDIR /home

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');"

RUN apt-get update && apt-get install -y \
    unzip \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*
    

#RUN php composer.phar create-project cmsrs/cmsrs3
RUN git clone https://github.com/cmsrs/cmsrs3.git

WORKDIR /home/cmsrs3

RUN php /home/composer.phar install

RUN echo "syntax enable" >> ~/.vimrc \
    && echo "set number" >> ~/.vimrc \
    && echo "set background=dark" >> ~/.vimrc \
    && echo "set tabstop=4" >> ~/.vimrc \
    && echo "set shiftwidth=4" >> ~/.vimrc \
    && echo "set expandtab" >> ~/.vimrc


CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
