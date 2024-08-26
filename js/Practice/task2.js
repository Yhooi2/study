
const ol = document.createElement('ol');
const body = document.querySelector('body');
let employees = [ 
	{ firstName: 'Alice', lastName: 'Safina' },
	{ firstName: 'Art', lastName: 'Sort'},
	{ firstName: 'Igor', lastName:'Lar'},
	{ firstName: 'John', lastName: 'Doe' },
    { firstName: 'Bob', lastName: 'Williams' },
    { firstName: 'Charlie', lastName: 'Brown' },
    { firstName: 'Emily', lastName: 'Davis' }
];
employees.forEach(employee => {
	const li = document.createElement('li');
	li.textContent = `${employee.firstName} ${employee.lastName}`;
	ol.appendChild(li);
	});

body.appendChild(ol);


