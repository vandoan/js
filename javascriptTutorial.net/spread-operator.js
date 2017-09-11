/*
  SPREAD OPERATOR
  Key concepts from:
  http://www.javascripttutorial.net/es6/javascript-spread/
*/


function compare(a, b) {
	return a -b;
}

// Using the function with an array in ES5
// notice the null and apply function
var result = compare.apply(null, [1,2]);
console.log(result);

// ES6
let result = caopare(...[1,2]);
console.log(result); 



// With the push method
var cities = ['Tampa', 'Miami', 'Orlando'];
var moreCities = ['Jacksonville', 'Tallahassee', 'Key West'];

// Older method
// Array.prototype.push.apply(cities, moreCities);
// console.log(cities);

// EC6 
cities.push(...moreCities);
console.log(cities);s


// spreading characters
let chars = 'a', ...'bc', 'd'];
console.log(chars); // ['a','b','c','d']