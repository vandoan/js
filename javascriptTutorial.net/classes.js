/* Classes
   http://www.javascripttutorial.net/es6/javascript-class/
*/


// Prior to ES6
function Animal(type) {
	this.type = type;
}

Animal.prototype.identify = function() {
	console.log(this.type);
}

var cat = new Animal('Cat');
cat.identify(); // Cat


// ES6 Class

class Animal {
	constructor(type) {
		this.type = type;
	}
	identify() {
		console.log(type);
	}
}

let cat = new Animal('Cat');
cat.identify();

/* 	
	Class declaration is syntactic sugar of the constructor function
   	therefore, animal.typeof is function.
   	Class declarations are not hoisted like function declarations.
    Code inside class executes in strict mode and cannot be changed.
    Class methods are non-enumerable.

*/

console.log(typeof Animal); // function
let duck = Animal('Duck'); // error, must use "new" operator

// class expression does not require an identifier after class keyword
let Animal = class {
	constructor(type) {
		this.type = type;
	}
	identify() {
		console.log(type);
	}
}


function factory(aClass) {
	return new aClass();
}

let greeting = factory(class {
	sayHi() {
		console.log('Hi');
	}
});

greeting.sayHi(); // 'Hi'


// Singleton, add new operator and include parenthesis at end
let app = new class {
	constructor(name) {
		this.name = name;
	}
	start() {
		console.log(`Starting the ${this.name}...`);
	}
}('Awesome App');  // pass the arg

app.start();

