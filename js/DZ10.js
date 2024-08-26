
// Task 1
function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;

	while (left < right) {
		if (str[left] !== str[right])
			return false;
	    left++;
	    right--;
	}
	return true;

}
console.log(isPalindrome('124321'))

// Task 2
function isPrime(num) {
	for (let i = 2; i * i <= num; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
console.log(isPrime(2));

// Task 3
function getAge(date) {
	today = new Date();
	console.log(today.getFullYear() - date.getFullYear());
}
age = new Date(1988, 2, 10);
getAge(age);

// Task 4
function isWeekend(date) {
	if (date.getDay() == 6 || date.getDay() == 0) {
		return true;
	} else return false;
}
console.log(isWeekDay(age))