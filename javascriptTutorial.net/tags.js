function format(literals, ...substitutions) {
	let result = '';

	for (let i = 0; i< subsitutions.length; i++;){
		result += literals[i];
		result += substitutions[i];
	}
	// add teh lst literal
	result += literals[literals.length - 1];
	return result;
}

let quantity = 9,
	priceEach = 8.99,
	result = foramt`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.;

	console.log(result); // 9 items cost $80.91.



var server = {
    name: 'server',
    restart: function () {
        console.log('The' + this.name + ' is restarting...');
    }
};

var server = {
    name: 'server',
    restart() {
        console.log(`The ${this.name} is restarting...`);
    }
};