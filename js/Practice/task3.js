const div = document.createElement('div');
div.style.width = '50px';
div.style.height = '50px';
div.style.backgroundColor = 'red';
div.style.transition = 'all 1s ease';

const body = document.querySelector('body');
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '50vh';	

div.addEventListener('click', () => {
	if (div.style.borderRadius === '50%') {
		div.style.borderRadius = '0%';
	} else div.style.borderRadius = '50%';
});

body.appendChild(div);
