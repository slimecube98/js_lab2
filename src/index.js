/**
 * Импортирует функции для получения случайной активности.
 * @module activity
 */
import { getRandomActivity, getRandomActivityAsync } from './activity.js';

/**
 * Добавляет обработчик события, который вызывается после полной загрузки DOM.
 * Вызывает функцию `getRandomActivity` для отображения случайной активности.
 * 
 * @listens DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', getRandomActivity);

/**
 * Функция для циклического отображения случайной активности каждые 60 секунд.
 * Использует асинхронную функцию `getRandomActivityAsync` для получения данных.
 * 
 * @function displayActivity
 * @returns {void}
 */
function displayActivity() {
    getRandomActivityAsync();
    setTimeout(displayActivity, 60000);
}

// Запускает цикл отображения активности
displayActivity();