
let newDate = new Date();
console.log(newDate);

newDate = new Date(0);
console.log(newDate);

newDate = new Date(-24 * 3600 *1000);
newDate = new Date('2022-06-10');
console.log(newDate.getDate());
newDate.setFullYear(2024);
console.log(newDate);

let date = new Date (2014, 1, 28);
console.log(date.getDate());
date.setDate(date.getDate() + 2);
console.log(date.getDate());

let user = {
	name: "John",
	age: 30,
	toString() {
		return `{name: "${this.name}", age: ${this.age}}`;
	}
};
console.log(typeof user);

// JSON
let userNew = {
	name: "John",
	age: 30,
	isAdmin: false,
	courses: ['html', 'css', 'js']
};

let json = JSON.stringify(userNew);
console.log(json);
console.log(typeof json);

console.log(JSON.stringify(1));
console.log(JSON.stringify('test'));
console.log(JSON.stringify(true));
console.log(JSON.stringify([1, 2, 3]));

let userNew1 = {
	sayHi() {
		console.log("Hello");
	},
	something: undefined
};
console.log(JSON.stringify(userNew1));

let str = '{"title": "Conference", "date": "2017-11-30"}';

let meetupNew = JSON.parse(str, function(key, value) {
	if (key == 'date') return new Date(value);
	return value;
});
console.log(meetupNew.date.getDate());