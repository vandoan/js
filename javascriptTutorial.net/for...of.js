/* 
  For... of loops
  http://www.javascripttutorial.net/es6/javascript-for-of/
*/

let scores = [80, 42, 29];
for (let score of scores) {
	score = score + 5;
	console.log(score);
}

// If not changing vars inside loop, use const
for (const score of scores) {
	console.log(score);
}


// Map object 
var colors = new Map();
colors.set('red', '#ff0000');
colors.set('green', '#00ff00');
colors.set('blue', '#0000ff');

for (let color of colors) {
	console.log(color);
}

// for... in loop iterates over object enumerable properties
// for... of loop iterates over a collection

let numbers = [6, 7, 8];
numbers.string = 'pie';

for (let i in numbers) {
	console.log(i);
} // 6, 7, 8, foo

for (let i of numbers) {
	console.log(i);
} // 6, 7, 8 