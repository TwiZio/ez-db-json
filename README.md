# EZ-DB-JSON
EZ DB JSON est un module qui permet d'enregistrer, d'utiliser, et de changer des données tout ça dans un fichier json !
Grâce à ce module, plus besoin de faire 10 lignes de code ! Une suffit !

# Features
• Made in France ! 🇫🇷<br/>
• Simple d'utilisation 🍃<br/>
• 4 fonctions seulement !<br/>

# Installation
Allez dans votre terminal et lancez la commande:<br/>
```npm install ez-db-json```

# Avant de commencer...

Vous devez importer le module dans votre code:<br/>
```javascript
const db = require('ez-db-json');
```

# Toutes les fonctions et exemples

## Fonction `set`
```javascript 
db.set(<name - String>, <value - Any>);
```
Cette fonction permet de set une valeur à un nom dans votre fichier db.json.

`name`: Le nom de la valeur que vous souhaitez configurer.
`value`: La valeur que vous voulez attribuer.

#### Exemple: <br/>
```javascript
db.set('activé', true);
```
• Output:
```Boolean```

## Fonction `get`
```javascript
db.get(<name - String>);
```
Cette fonction permet de prendre la valeur d'un nom dans votre fichier db.json.<br/>
`name`: Le nom de la valeur que vous voulez prendre.
#### Exemple:<br/>
```javascript
db.get('activé');
// => true
```

• Output:
```Any```

## Fonction `add`
```js
db.add(<name - String>, <value - Number>);
```
Cette fonction permet d'ajouter un nombre à un autre nombre.<br/>
`name`: Le nom de la valeur que vous voulez ajouter.<br/>
`value`: Le nombre à ajouter.

#### Exemple:<br/>
```js
db.set('points', 1);
// => 1
db.add('points', 6);
// => 7
```

• Output:
```Boolean```
## Fonction `remove`
```js
db.remove(<name - String>, <value - Number>);
```
Cette fonction permet de retirer un nombre à un autre nombre.<br/>
`name`: Le nom de la valeur que vous voulez retirer.<br/>
`value`: Le nombre à retirer.

#### Exemple:<br/>
```js
db.remove('points', 2);
// => 5
```

• Output:
```Boolean```
