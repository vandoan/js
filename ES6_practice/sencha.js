// https://www.sencha.com/blog/toward-modern-web-apps-with-ecmascript-6-2/

// ES 5
function doSomething() {
  var N = 5;
  if (someCondition) {
    var N = 10;
    doSomethingElse(N);
  }
  console.log(N); // 10
}

// ES6, lexical block scope
function doSomething() {
  let N = 5;
  if (someCondition) {
    let N = 10;
    doSomethingElse(N);
  }
  console.log(N); // 5
}



// ES 6
const limit = 100;
limit = 200;
console.log(limit); // 100


// ES 6, concise method definition
var Person = {
  name: 'Joe',
  hello() { console.log('Hello, my name is ', this.name); }
};


// ES 5
[1,2,3].map(function (x) {
  return x * x;
});
// ES 6, ARROW FUNCTION
[1,2,3].map(x => x * x);


// ES 5
var max = Math.max.apply(null, [14, 3, 77]);
// ES 6, SPREAD OPERATOR
var max = Math.max(...[14, 3, 77]);


// ES 5
store('Jane', 'letters', 'certificates');
function store(name) {
  var items = [].slice.call(arguments, 1);
  items.forEach(function (item) {
    vault.customer[name].push(item);
  });
}
// ES 6, REST PARAMETERS
store('Jane', 'letters', 'certificates');
function store(name ...items) {
  items.forEach(functin (item) {
    valut.customer[name].push(items)
  });
}



// ES 5
[1, 2, 3].map(function (i) { return i * i});
//ES 6, ARRAY COMPREHENSION
[for (i of [1, 2, 3]) i * i ];


// ES 5 
[1,4,2,3,-8].filter(function(i) { return i > 3});
// ES 6 FILTER
[for (i of [1,4,2,3,-8]) if (i >3) i];


// ES 6, produce all possible chess positions (a1 to h8)
[for (x of 'abcdefgh'.split('')) for (y of '12345678'.split('')) (x+y)];


// ES 6 CLASS ***********
class Vehicle {
  constructor(color) {
    this.color = color;
    this.speed = 0;
  }
  drive() {
    this.speed = 40;
  }
}
// ES 5 CLASS
function Vehicle(color) {
  this.color = color;
  this.speed = 0;
}
Vehicle.prototype.drive = function() {
  this.speed = 40;
}




// ES 6 EXTEND CLASS  **********
class Car extends Vehicle {
  constructor(brand, color_ {
  super(color);
  this.brand = brand;
  this.wheels = 4;
  }
} 
// ES 5 EXTEND CLASS
function Car(brand, color) {
  Vehicle.call(this, color);
  this.brand = brand;
  this.wheels = 4;
Car.prototype = Object.create(Vehicle.protoype);
Car.protype.constructor = Car;


// ES 6 MODULES
const HALF = 0.5;
export function sqrt(x) {
  return Math.exp(HALF * Math.log(x));
}
// say this function is stored in mathlib.js
// we cam import it in another file
import { sqrt } from 'mathlib';
console.log(sqrt(16));

// ES 6 GENERATOR
function * foot() {
  yield 'foo';
  yield 'bar';
  yield 'baz';
}

var x = foo();
console.log(x.next().value); // 'foo'
console.log(x.next().value); // 'bar'
console.log(x.next().value); // 'baz'



