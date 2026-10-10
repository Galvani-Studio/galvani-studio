#!/bin/sh
set -eu
# Run from repository root after services are ready.
docker compose --env-file wordpress/.env -f wordpress/compose.yaml exec -T --user root wordpress chown -R www-data:www-data /var/www/html/wp-content/uploads
docker compose --env-file wordpress/.env -f wordpress/compose.yaml run --rm cli sh -ec '
if ! wp core is-installed; then
  wp core install --url="http://localhost:8085" --title="Galvani Studio" --admin_user="galvani_admin" --admin_password="$WP_ADMIN_PASSWORD" --admin_email="$GALVANI_NOTIFY_EMAIL" --skip-email
fi
wp theme activate galvani-studio
wp option update permalink_structure "/%postname%/"
wp eval-file /opt/galvani/setup-content.php
'
