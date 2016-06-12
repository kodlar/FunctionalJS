'use strict'
//functional programing
// functions are values

//create anonymus function and assign to a variable or pass into other functions

var triple = function(x) {
  return x * 3
}
//functions are values örnek
var waffle = triple

waffle(30)


//higher order functions what good for
//1-composition
// take one function and put it into another function allows compost small functions  into bigger functions
// higher order functions biggest sample are filters

var animals = [  {name : 'ok', gender : 'disi'} , {name : 'ak', gender : 'erkek'},{name : '2k', gender : 'erkek'}, {name : 'sdak', gender : 'trans'}]
//klasik yazımda for ile bu array içinde cinsiyeti erkek olanları bulmak istersek
/*
var erkek = []
for (var i = 0; i < animals.length; i++) {
  if(animals[i].gender === 'erkek')
    erkek.push(animals[i])
}
console.log(erkek)
*/

//2.yazım functional programing ile
/*
var erkek = animals.filter(function(animal){
  return animal.gender === "erkek"
})

console.log(erkek)
*/
//description of above code
// function send other functions usuall call callback functions
// filter loop through each itemm
// we are writing this type of code and creating reusable code

// 3.yazım yukardaki kodun re-factoring edilmesi

var isErkek = function(animal){
  return animal.gender === "erkek"
}

var erkek = animals.filter(isErkek)

//console.log(erkek)

// kodu bu şekilde yazarak decouple olayını yapmış oluyoruz yani
// bağımlılık azalıyor.
//bu reject hata veriyor.
//I'm making a mistake here. Reject is NOT built into JavaScript like filter is. You can find reject in underscore.js and similar libraries.
var digerleri = animals.reject(isErkek)

console.log(digerleri)
