// Task 1
let str = 'luke, I am your father';
console.log(str[0].toUpperCase() + str.slice(1))
console.log(str.replace(/^\w/, (c) => c.toUpperCase()))

// Task 2
str = "AbcdEfg";
let str1 = "abCDEFg";
console.log(str.localeCompare(str1));
console.log(str.toUpperCase().localeCompare(str1.toUpperCase()));

// Task 3
let arr = [2000, 2001, 2002, 2003, 2004, 2005];
console.log(arr.filter(num => num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)))

// Task 4
arr = [6, 187, 66, 4, 67, 30, 18]
console.log(arr.toSorted((a, b) => a - b))
console.log(arr.reverse((a,b) => a - b))
