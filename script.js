function fibonacci(num) {
// your code here
	let num1 = 0;
	let num2 = 1;
	let num3 = num1+num2;

	 for (let i = 2; i < num; i++) {
	 	 num1 = num2;
		 num2 = num3;
		 num3 = num1+num2;
	 }
      return num3;
}

module.exports = fibonacci;
