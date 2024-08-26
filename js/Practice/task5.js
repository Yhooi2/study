/* Задание 5: При помощи JavaScript создайте input и кнопку. Внутрь кнопки
запишите строку ‘Сохранить’ Выведите их на страницу.
При клике на кнопку текст введённый в input должен сохраняться в localStorage.
Используйте ключ ‘Text’. После этого, через 2 секунды достаньте из localStorage
сохраненное значение и выведите его в консоль
используйте setTimeout для отложенного вывода в консоль
*/
const input = document.createElement('input');
const button = document.createElement('button');
const body = document.querySelector('body');

input.type = 'text';
button.textContent = 'Сохранить';
button.addEventListener('click', () => {
	localStorage.setItem('Text', input.value);
	setTimeout(() => {
		console.log(localStorage.getItem('Text'));
	}, 2000);
});

body.appendChild(input);
body.appendChild(button);

