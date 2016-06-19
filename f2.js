'use strict'

var animals = [  {name : 'ok', gender : 'disi'} , {name : 'ak', gender : 'erkek'},{name : '2k', gender : 'erkek'}, {name : 'sdak', gender : 'trans'}]

//1.yazım tarzı klasik

/*
var names = []

for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name)
}

console.log(names)
*/

//2.yazım map kullanarak

/*
var names = animals.map(function(animal){
   return animal.name + ' is a ' + animal.gender
})

console.log(names)
*/

//3.yazım ecma6 ile yazarsak

var nameEcma6 = animals.map((animal) => animal.name)

console.log(nameEcma6)
