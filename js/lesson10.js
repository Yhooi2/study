let promise = new Promise(function(resolve, reject) {
	setTimeout( function() {
		let mark = Math.floor(Math.random() * 4) + 2;
		if (mark > 3) {
			resolve(mark);
		}
		reject(mark); // reject(new Error("Whoops!"))
	}, 100);
});

promise.then(
	result => console.log(`I,ve got ${result}! The prize is mine.`),
	error => console.log(`Oh, no! I,ve got ${error}!`)
    )
