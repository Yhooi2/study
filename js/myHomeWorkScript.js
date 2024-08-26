function createDiv() {
	console.log("first func")
	let div = document.createElement('div');
	div.className = "post-wrap";
	let div2 = document.createElement('div');
	div2.className = "post-item";
	let div3 = document.createElement('div');
	div3.className = "post-item-wrap";
	let a = document.createElement('a');
	a.className = "post-link";
	let h3 = document.createElement('h3');
	h3.className = "post-title";
	h3.innerHTML = "My new div";
	let p = document.createElement('p');
	p.className = "post-content";
	p.innerHTML = "Lorem ipsum dolor sitamet, consect eturad ipisc ingelit. Vestibu lumve larcupurus. Duisege staspuru setex inter dum lobortis. Quis quene cmagna viverra, inter dum dolorat, congue augue. Quis quesed inter dumaugue, alacin ianulla. Sedris usnibh, vest ibulum eunisi eu, imperd iettem porquam.";

	document.getElementById("main").appendChild(div);
	document.getElementsByClassName("post-wrap")[0].appendChild(div2);
	document.getElementsByClassName("post-item")[0].appendChild(div3);
	document.getElementsByClassName("post-item-wrap")[0].appendChild(a);
	document.getElementsByClassName("post-link")[0].appendChild(h3);
	document.getElementsByClassName("post-title")[0].appendChild(p);
}