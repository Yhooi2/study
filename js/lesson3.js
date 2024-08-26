let str = 'sdkhg';
console.log(str.length);

str = "Alex";
let newStr = '';
let letter = '';

for (i = 0; i < str.length; i++) {
	letter = str[str.length - i - 1];
	newStr = newStr + letter;
}
console.log(newStr);