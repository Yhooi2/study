function first() {
    setTimeout( function() {
	    console.log("first!");
    }, 1000);
}

function second() {
	return "second!";
}
first();
console.log(second());