import './template.js';
import './animations.js';
import './logic.js';
import { runAllTests } from './tests.js';

document.addEventListener('DOMContentLoaded', () => {
    // Инициализация приложения
    runAllTests(); // Запуск всех тестов
});