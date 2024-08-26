function greetAnna() {
	console.log("Hello, Anna!");
}

greetAnna();

function greetAnna1() {
	let greeting = "Hello, Anna!";
	console.log(greeting);
}
greetAnna1();


let userName1 = "Anna!";
function greetAnna2() {
	let greeting = "Hello, " + userName1;
	console.log(greeting);
}
greetAnna2();

function greetAnna3() {
	userName1 = "Elsa";
	let greeting = "Hello, " + userName1;
	console.log(greeting);
}
console.log(userName1);
greetAnna3();
console.log(userName1);

// аргументы функции, значения по умолчанию
userName = "John";
function greetUser2(userName, text = "Привет,") {
	userName = userName + "!";
	let greeting = text + userName;
	console.log(greeting);
}
greetUser2(userName);
greetUser2(userName, "Hi, ")

let greeting = function() {
	console.log("hello")
}
console.log(greeting);
let func = greeting;
console.log(func);


function askForm(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
function ok() {
	alert("Yes");
}
function cancel() {
	alert("No")
}
askForm("Что вы выберете?", ok, cancel);
