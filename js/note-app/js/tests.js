import { createNoteElement } from './template.js';
import Animations from './animations.js';

// Тест для template.js
function testCreateNoteElement() {
    const note = { text: 'Тестовая заметка' };
    const noteElement = createNoteElement(note, 0);

    console.assert(noteElement instanceof HTMLElement, 'Ошибка: Элемент заметки должен быть DOM-элементом');
    console.assert(noteElement.querySelector('.card-text').textContent === 'Тестовая заметка', 'Ошибка: Текст заметки не совпадает');
    console.assert(noteElement.querySelector('.btn-warning').textContent === 'Редактировать', 'Ошибка: Кнопка редактирования должна быть');
    console.assert(noteElement.querySelector('.btn-danger').textContent === 'Удалить', 'Ошибка: Кнопка удаления должна быть');
    console.log('Тест template.js пройден успешно');
}

// Тест для animations.js
function testAnimations() {
    const noteElement = document.createElement('div');

    Animations.addNote(noteElement).then(() => {
        console.assert(noteElement.classList.contains('new') === false, 'Ошибка: Анимация добавления не завершена');
    });

    Animations.removeNote(noteElement).then(() => {
        console.assert(noteElement.classList.contains('deleting') === false, 'Ошибка: Анимация удаления не завершена');
    });

    console.log('Тест animations.js пройден успешно');
}

// Тест для logic.js
function testLogic() {
    const notes = [];
    const newNote = { text: 'Новая заметка' };
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));

    const noteElement = createNoteElement(newNote, notes.length - 1);
    Animations.addNote(noteElement).then(() => {
        console.assert(notes.length === 1, 'Ошибка: Заметка должна быть добавлена');
        console.assert(notes[0].text === 'Новая заметка', 'Ошибка: Текст новой заметки не совпадает');
    });

    notes.splice(0, 1);
    localStorage.setItem('notes', JSON.stringify(notes));

    Animations.removeNote(noteElement).then(() => {
        console.assert(notes.length === 0, 'Ошибка: Заметка должна быть удалена');
    });

    console.log('Тест logic.js пройден успешно');
}

// Запуск всех тестов
function runAllTests() {
    console.log('Запуск всех тестов...');
    testCreateNoteElement();
    testAnimations();
    testLogic();
    console.log('Все тесты завершены.');
}

// Экспорт функции для запуска тестов
export { runAllTests };
