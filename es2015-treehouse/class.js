class Student {
	constructor({ name, age, interestLevel = 5 } = {}) {
		this.name = name;
		this.age = age;
		this.interesetLevel = interestLevel;
		this.grades = new Map();
	}
}

let joey = new Student({ name: 'Joey', age: 25 });
let sara = new Student({ name: 'Sara', age: 22 });

sara.grades.set('History','B');
sara.grades.set('Math','C');

console.log(Array.from(sara.grades));