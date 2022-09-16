const myImport = require('./02'); //imports all the things exported from 02.js file
console.log('hi from 01');
//console.log(numbers); but cannot access the variables directly

console.log(myImport); //returns an empty object when nothing is exported
console.log(myImport.names);


//particular imports
const {numbers} = require('./02'); //imports only numbers array from 02.js
console.log(numbers);

const {names} = require('./02');
console.log(names); //imports only names array from 02.js
