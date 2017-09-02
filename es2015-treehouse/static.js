class Bird {
	static changeColor(bird, color) {
		//this.color = color;
		bird.color = color;
	}
	constructor({ color = 'red' } = {}) {
		this.color = color;
	}
}

let redBird = new Bird;
console.log(redBird.color);
// Bird.changeColor.call(redBird, 'blue');
Bird.changeColor(redBird, 'blue');
// by switching to bird instead of this in the function, enable to remove call()
console.log(redBird.color);