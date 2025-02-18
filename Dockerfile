FROM php:8.2-fpm-alpine

RUN addgroup -S dwc && adduser -S -G dwc dwc

# Installer les extensions PHP nécessaires
RUN apk add --no-cache \
      libpq-dev freetype libjpeg-turbo libpng freetype-dev libjpeg-turbo-dev libpng-dev zip libzip-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql zip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd \
    && docker-php-ext-install pcntl \
    && docker-php-ext-enable gd \
    && apk del --no-cache freetype-dev libjpeg-turbo-dev libpng-dev \
    && rm -rf /var/cache/apk/* /tmp/*

# Installer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY . .

# Installer les dépendances PHP avec Composer
RUN composer install --no-dev --optimize-autoloader

# Définir les permissions pour l'utilisateur dwc
RUN chown -R dwc:dwc /app

USER dwc

EXPOSE 9000

CMD ["php-fpm"]
