FROM php:apache
# copies over htaccess 
RUN cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
# Update image
RUN apt-get update && apt-get install -y libmagickwand-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*
# Install git
RUN apt-get update && apt-get install -y git
# Install imagick
RUN printf "\n" | pecl install imagick
# Enable imagick
RUN docker-php-ext-enable imagick
# Install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Copy all files over to docker image
COPY . /var/www/html/
# Copy custom http config over
# seems to be breaking it
#COPY ./000-default.conf /etc/apache2/sites-enabled/
# Install and update project dependencies
RUN composer install && composer update
# Need to create and copy over custom httpd.conf
# Need one for development and one for prod
# Need ssl certs

