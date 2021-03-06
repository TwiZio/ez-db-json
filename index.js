const { writeFileSync, readFileSync} = require('fs')

function set (name, value) {
  if(!name) throw new RangeError("Merci de spécifier le nom de la valeur à enregistrer !")
  if(!value) throw new RangeError("Merci de spécifier la valeur à enregistrer")
  if(typeof name !== 'string') return console.error("Merci de mettre un string comme nom !")

  let db = JSON.parse(readFileSync("./db.json", "utf-8"));

  db[name] = value;

  writeFileSync('./db.json', JSON.stringify(db));
  
  return true;
  
}

module.exports.set = set;


function get (name) {
  if(!name) throw new RangeError("Merci de spécifier le nom !")
  if(typeof name !== 'string') throw new TypeError("Merci de mettre un string comme nom !")
  
  const contentFile = readFileSync('./db.json', {encoding:'utf8'});
  const data = JSON.parse(contentFile)
  
  return data[name]
}

module.exports.get = get;

function add (name, value) {
  if(!name) throw new RangeError("Merci de spécifier le nom !")
  if(typeof name !== 'string') throw new TypeError("Merci de mettre un string comme nom !")
  
  if(!value) throw new RangeError("Merci de spécifier la valeur à ajouter")
  if(typeof value !== 'number') throw new TypeError("Merci de mettre un string comme nom !")
  const contentFile = readFileSync('./db.json', {encoding: 'utf8'})
  if(!contentFile) throw new RangeError("Merci de mettre des {} dans votre fichier db.json")
  const contentFileObject = JSON.parse(contentFile)
  if(!(name in contentFileObject)) throw new RangeError("Aucune valeur ne correspond à votre demande ! Merci d'en définir une avec la fonction set()")
  const valueToAdd = contentFileObject[name];
  if(typeof valueToAdd !== 'number') throw new TypeError("La valeur à laquelle vous voulez rajouter un nombre doit être un nombre !")
  const valueAdded = valueToAdd + value;
  const stringToStringify = `{"${name}":${valueAdded}}`
  const data = JSON.stringify(stringToStringify)
  const finalObject = JSON.parse(data)
  
  writeFileSync('./db.json', finalObject)
  
  return true;
}

module.exports.add = add;


function remove (name, value) {
  if(!name) throw new RangeError("Merci de spécifier le nom !")
  if(typeof name !== 'string') throw new TypeError("Merci de mettre un string comme nom !")
  
  if(!value) throw new RangeError("Merci de spécifier la valeur à retirer")
  if(typeof value !== 'number') throw new TypeError("Merci de mettre un string comme nom !")
  const contentFile = readFileSync('./db.json', {encoding: 'utf8'})
  if(!contentFile) throw new RangeError("Merci de mettre des {} dans votre fichier db.json")
  const contentFileObject = JSON.parse(contentFile)
  const valueToRemove = contentFileObject[name];
  if(!valueToRemove) throw new RangeError("Aucune valeur ne correspond à votre demande !")
  if(typeof valueToRemove !== 'number') throw new TypeError("La valeur à laquelle vous voulez retirer un nombre doit être un nombre !")
  const valueRemoved = valueToRemove - value;
  const stringToStringify = `{"${name}":${valueRemoved}}`
  const data = JSON.stringify(stringToStringify)
  const finalObject = JSON.parse(data)
  
  writeFileSync('./db.json', finalObject)
  
  return true;
}

module.exports.remove = remove
