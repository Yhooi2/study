// 1
for (i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`Число ${i} кратно 3 и 5`);
	} else if (i % 3 === 0) {
		console.log(`Число ${i} кратно 3`);
	} else if (i % 5 === 0) {
		console.log(`Число ${i} кратно 5`);
	}
}

// 2
for (i = 100; i < 1000; i++) {
	let hundred = i / 100 >> 0;
	let ten = (i / 10 >> 0) % 10;
	let unit = i % 10;

	if (hundred ** 3 + ten ** 3 + unit ** 3 === i) {
		console.log(i)
	}
}

// 3

let a = 18;
let b = 48;
let temp;

while(b !== 0) {
	temp = b;
	b = a % b;
	console.log(b, a)
	a = temp;
} 
console.log(a)