# Installazione Rapida per WordPress - Test 15 Minuti

## Setup Locale Veloce

### Opzione 1: Local by Flywheel
1. Scarica [Local](https://localwp.com/)
2. Crea un nuovo sito WordPress
3. Copia la cartella `wp-designer-plugin` in `/wp-content/plugins/`
4. Attiva il plugin dal dashboard

### Opzione 2: XAMPP/WAMP
1. Installa XAMPP o WAMP
2. Scarica WordPress e configuralo
3. Copia la cartella del plugin in `/wp-content/plugins/`
4. Attiva il plugin

### Opzione 3: WordPress CLI (Avanzato)
```bash
# Installa WP CLI se non disponibile
curl -O https://raw.githubusercontent.com/wp-cli/wp-cli/v2.8.1/wp-cli.phar
chmod +x wp-cli.phar
sudo mv wp-cli.phar /usr/local/bin/wp

# Scarica WordPress
wp core download --locale=it_IT

# Configura database (modifica i valori)
wp config create --dbname=designer_test --dbuser=root --dbpass=password

# Installa WordPress
wp core install --url=http://localhost/designer-test --title="Designer Test" --admin_user=admin --admin_password=admin --admin_email=test@example.com

# Copia plugin e attiva
cp -r wp-designer-plugin wp-content/plugins/
wp plugin activate wp-designer-plugin
```

## Test del Plugin

### Dopo l'installazione:
1. Vai nel dashboard WordPress
2. Attiva il plugin "Designer Test Plugin"
3. Crea una nuova pagina
4. Aggiungi il shortcode: `[designer_test]`
5. Visualizza la pagina per vedere gli errori in azione

### Shortcode con parametri:
```
[designer_test title="Custom Title" color_scheme="blue" show_form="true"]
[designer_test title="Solo Features" show_form="false" color_scheme="green"]
```

## Compilazione SASS

### Prima installazione:
```bash
npm install
```

### Compilazione:
```bash
# Singola compilazione
npm run build

# Watch mode per sviluppo
npm run build:watch

# Versione compressa per produzione
npm run build:compressed
```

## Debugging

### Console Browser:
Apri gli strumenti sviluppatore per vedere:
- Errori JavaScript nella Console
- Richieste AJAX nel Network
- Problemi CSS nell'inspector

### WordPress Debug:
Aggiungi a `wp-config.php`:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', true);
```

I log saranno in `/wp-content/debug.log`
