FROM php:apache
# Update image
RUN apt-get update && apt-get install -y libmagickwand-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*
# Install imagick
RUN printf "\n" | pecl install imagick
# Enable imagick
RUN docker-php-ext-enable imagick
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Install and update project dependencies
#RUN composer install && composer update

