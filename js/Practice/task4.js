const calculator = {

	validateArgs(a, b) {
		if (typeof a !== 'number' || typeof b !== 'number')
			return "arguments  isn't numbers";
		else return null;
	},

	add(a, b) {
		return this.validateArgs(a, b) || a + b;
	},
	sub(a, b) {
		return this.validateArgs(a, b) || a - b;
	},
	mult(a, b) {
		return this.validateArgs(a, b) || a * b;
	},
	div(a, b) {
		return this.validateArgs(a, b) || (b === 0 ? "can't divided by zero" : a / b);
	}
}

console.log(calculator.div( 1, 2))