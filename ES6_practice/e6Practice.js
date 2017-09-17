//https://www.wintellect.com/5-great-features-in-es6-harmony

// CLASSES
function Car(make){ // approximate a class / constructor
	this.make = make;
	this.currentSpeed = 25;

	this.printCurrentSpeed = () => {
		console.log(`The ${this.make} is going ${this.currentSpeed} mph.`);
	}
}
// Instantiate a new car 
// var Kia = new Car('Kia');
//Kia.printCurrentSpeed();


class RaceCar extends Car {
	constructor(make, topSpeed) {
		super(make); // Call parent constructor
		this.topSpeed = topSpeed;
	}

	goFast(){
		this.currentSpeed = this.topSpeed;
	}
}

// let stang = new RaceCar('Mustang',150);

// stang.printCurrentSpeed();
// stang.goFast(); // updates speed with topSpeed
// stang.printCurrentSpeed();



// ARROW FUNCTIONS
function Car() {
	var self = this; // locally assign this
	self.speed = 0;

	setInterval (() => { // arrow function
		// this has a different scope, but now can use self var
		// to reference parent this
		self.speed += 5;
		console.log('Now going: ' + self.speed);
	}, 1000 );
}
// var car = new Car();



var x = [0,1,2];
// x.map(function (x) {
// 	console.log(x * x);
// });

// Clean the above up
x.map(x => console.log(x * x));




// MODULES
// Poor explaination




// BLOCK SCOPING
var num = 0; // Global scope

for(let i = 0; i < 5; i++){ // i is block scoped
	num += i;
	console.log('Value of i in block: ' + i);
}
// console.log('Is i defined outside the loop?: ' + (typeof i !== 'undefined')) // false



// PROMISES
getJSON("/api/employee/1")
.then(function(post){
	return getJSON(post.commentURL);
})
.then(function(comments) {
	// Proceed with access to employee
})
.catch(function(error){
	// Handle errors
});


// Promise.resolve(value)
// Promise.case(value)
// Promise.race(iterable)
// Promise.all(iterable)

















