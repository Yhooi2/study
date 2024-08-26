const user = {
	name: "Art",
	surname: "Yhoo",
};
user.email = 'yhooi@yandex.ru';
delete user.name;	
console.log(user);

let map = new Map();

map.set('1', "strAsKey");
map.set(1, "numAsKey");
map.set(true, "boolAsKey");

console.log(map);
console.log(map.get("1"));
console.log(map.has(1));
console.log(map.size);
console.log(map.delete(1));
console.log(map);
map.clear();
console.log(map);

let clients = new Map([
	["Jack", 1994],
	["Bob", 1997],
	["Alex", 1987],
	]);
console.log(clients);

for (let name of clients.keys()) {
	console.log(name);
}

for (let year of clients.values()) {
	console.log(year);
}

for (let value of clients) {
	console.log(value);
}

clients.forEach((value, key, map) => {
	console.log(`${key}: ${value}`);
});

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(john);
set.add(mary);

console.log(set.size);
console.log(set);

for (let user of set) {
	console.log(user.name);
}