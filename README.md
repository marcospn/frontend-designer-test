# Frontend Designer Test Challenge

## Panoramica
Benvenuto al test tecnico per la posizione di Frontend Designer! Questo repository contiene un plugin WordPress con alcuni problemi che dovrai risolvere.

## Obiettivo del Test
Il tuo compito è quello di:
1. 🐛 **Debug del codice PHP**: Correggere gli errori nel file del plugin principale
2. 🔧 **Fix del JavaScript**: Risolvere i problemi di funzionalità nell'interazione frontend
3. 🎨 **Styling con SASS**: Completare e correggere gli stili per ottenere il design previsto
4. 📦 **Git workflow**: Dimostrare la tua familiarità con Git e GitHub

## Tempo Stimato
⏱️ **15 minuti circa** - Versione ottimizzata con 16 errori totali

## Requisiti di Sistema
- **Node.js**: v18.20.4 (specificato in `.nvmrc`)
- **npm**: v8.0+ 
- **WordPress**: 5.0+ (per testare il plugin)
- **Git**: Per il version control

> 💡 **Tip**: Se usi nvm, esegui `nvm use` nella root del progetto per utilizzare la versione Node.js corretta.

## Istruzioni per Iniziare

### 1. Setup del Repository
```bash
# Clona questo repository
git clone [URL_DEL_TUO_FORK]
cd frontend-designer-test

# Usa la versione Node.js corretta (se hai nvm installato)
nvm use

# Installa le dipendenze
npm install

# Crea un nuovo branch per il tuo lavoro
git checkout -b fix/frontend-issues
```

### 2. Struttura del Progetto
```
frontend-designer-test/
├── wp-designer-plugin/          # Plugin WordPress principale
│   ├── wp-designer-plugin.php   # File principale del plugin (ERRORI PHP)
│   ├── assets/
│   │   ├── js/
│   │   │   └── frontend.js      # JavaScript con problemi (ERRORI JS)
│   │   └── sass/
│   │       ├── main.sass        # File SASS principale (DA COMPLETARE)
│   │       └── _components.sass # Componenti SASS (ERRORI CSS)
│   └── templates/
│       └── shortcode-template.php
├── mockup/                      # Design di riferimento
│   └── design-reference.png     # Risultato finale da ottenere
└── README.md
```

### 3. Problemi da Risolvere

#### 🐛 PHP Issues (wp-designer-plugin.php)
- [ ] Correggere errori di sintassi
- [ ] Sistemare la registrazione del shortcode
- [ ] Fixare l'enqueue degli assets

#### 🔧 JavaScript Issues (frontend.js)
- [ ] Correggere la gestione degli eventi
- [ ] Sistemare la validazione del form
- [ ] Fixare l'animazione di toggle

#### 🎨 SASS Issues (main.sass & _components.sass)
- [ ] Completare il layout grid
- [ ] Correggere i colori e le variabili
- [ ] Sistemare l'hover state dei button
- [ ] Implementare il responsive design

### 4. Test del Plugin
1. Installa il plugin in un ambiente WordPress locale
2. Usa lo shortcode `[designer_test]` in una pagina
3. Verifica che tutti gli elementi funzionino correttamente

### 5. Consegna
Una volta completate le correzioni:
```bash
# Compila il SASS
npm run build

# Commit delle modifiche
git add .
git commit -m "Fix: Risolti tutti i problemi PHP, JS e SASS"

# Push del branch
git push origin fix/frontend-issues

# Crea una Pull Request con una descrizione dettagliata delle modifiche
```

## Cosa Valutiamo
- ✅ **Qualità del codice**: Pulizia, leggibilità e best practices
- ✅ **Problem solving**: Capacità di identificare e risolvere problemi
- ✅ **Attenzione ai dettagli**: Precisione nell'implementazione del design
- ✅ **Git workflow**: Uso corretto di Git e messaggi di commit significativi
- ✅ **Tempistiche**: Capacità di lavorare efficacemente sotto pressione

## Note Tecniche
- Il plugin dovrebbe essere compatibile con WordPress 5.0+
- Usa CSS Grid o Flexbox per il layout
- Il codice JavaScript dovrebbe essere ES6+
- Segui le WordPress Coding Standards

## Supporto
Se hai domande durante il test, non esitare a chiedere chiarimenti.

**Buona fortuna! 🚀**
