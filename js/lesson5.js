let str = 'hello World';

for (let char in str) {
	console.log(char);
}
str[1] = 'a'; // don't work
console.log(str);

let pos = -1;
while ((pos = str.indexOf('l', pos + 1)) != -1) {
	console.log(pos);
}
console.log(str.codePointAt(0));
console.log(String.fromCodePoint(555));
console.log(str);
console.log(str.localeCompare('hello World'));

arr = [1, 2, 3];
console.log(arr.at(-1));
for (let [idx, val] of arr.entries()){
	console.log(idx, val)
}
arr[7] = 4;
console.log(arr.length);
arr.length = 1;
console.log(arr);
arr.length = 10;
console.log(arr, arr.length)

console.log([1, 2, 3].reduce((acc, num) => acc + num, 0));