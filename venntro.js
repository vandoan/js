// http://dev.venntro.com/2013/10/es6-part-3/

// DESTRUCTRING ASSIGNMENTS
// var [x,y,z] = [1,2,3]; 
// equivalent to var x = 1, y = 2, z = 3;
// console.log(y);

	// SWAPPING
	// let [x,y] = [1,2];
	// console.log(x,y); // 1,2

	//[x,y] = [y,x]; // Swap the values
	//console.log(x,y);

	// WORKS ON NESTED ARRAYS
	// let [x,[y]] = [1,[2]];
	// console.log(y);


// OBJECT PATTERS
// let { a: x, b: y } = { a: 1, b: 2 };
// console.log(x, y); // 1, 2

	// NESTED OBJECTS
	// let { a:x, b: { c: y } } = { a: 1, b: { c: 2 } };
	// console.log(x,y);

	// RETURNING MULTIPLE VALUES
	// function pop(){
	// 	return[1,'a',4];
	// }

	// var [a, b, c] = pop();
	// console.log(a,b,c);

		// RETURNING 1ST AND 3RD
		// var [a, , b] = pop();
		// console.log(a,b);













// http://dev.venntro.com/2013/10/es6-part-4/

// DEFAULT PARAMETERS
// function multiply(x,y = 1) {
// 	return x * y;
// }
// console.log(multiply(3));

// REFERENCE VARS IN OUTER SCOPE
// (function pop(x,y = x*2){ // Self calling function
// 	console.log(x,y); // 2,4
// })(2);


	// REST PARAMETERS

	// OLD WAY
	// function logEach(){
	// 	var things = Array.prototype.slice.call(arguments);
	// 	things.forEach(function(thing) {
	// 		console.log(thing);
	// 	});
	// }
	// logEach('a','b','c');

	// A BETTER WAY
	// function logEach(...things){
	// 	things.forEach(function(thing){
	// 		console.log(thing);
	// 	});
	// }
	// logEach('a','b','c');


	// SPREAD

	// OLD WAY
	// function example(a,b,c){
	// 	console.log(a,b,c);
	// }
	// var args= [1,2,3];
	// example.apply(null,args);

	// BETTER WAY
	// function example(a,b,c){
	// 	console.log(a,b,c);
	// }
	// var args = [1,2,3];
	// example(...args);

	//EXAMPLES
	// var parts = ["shoulder", "knees"];
	// var lyrics = ["head", ...parts, "and", "toes"];

	// var elems = document.querySelectorAll(".myClass");
	// var arr = [...elems];



























