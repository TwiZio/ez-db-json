# EZ-DB-JSON
Ez Db JSON est un module qui permet d'enregistrer, d'utiliser, et de changer des données tout ça dans un fichier json !
Grâce à ce module, plus besoin de faire 10 lignes de code ! Une suffit !

# Features
• Made in France ! 🇫🇷
• Simple d'utilisation 🍃
• 4 fonctions seulement !

# Installation
```npm install ez-db-json```

# Avant de commencer...

Vous devez importer le module dans votre code:

```javascript
const db = require('ez-db-json')
```

# Toutes les fonctions en exemple

```javascript 
##db.set(<name>, <value>)
```
Cette fonction permet de set une valeur à un nom dans votre fichier db.json.

`name`: Le nom de la valeur que vous souhaitez configurer.
`value`: La valeur que vous voulez attribuer.


```javascript
######db.set('activé', true)
```

```javascript
## db.get(<name>)
```
Cette fonction permet de prendre la valeur d'un nom dans votre fichier db.json.

`name`: Le nom de la valeur que vous voulez prendre
