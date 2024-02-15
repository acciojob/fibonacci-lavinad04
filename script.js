function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
	let num3 = num1+num2;

	 for (let i = 0; i < num; i++) {
	 	 num1 = num2;
		 num2 = num3;
		 num3 = num1+num2;
	 }
	console.log(num3);
}

module.exports = fibonacci;
