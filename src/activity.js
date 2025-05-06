/**
 * Получает случайное слово с API и отображает его в элементе с ID "activity".
 * В случае ошибки отображает сообщение об ошибке.
 * 
 * @function getRandomActivity
 * @returns {void}
 */
function getRandomActivity() {
  const activityElement = document.getElementById('activity');
  fetch('https://random-word-api.herokuapp.com/word')
    .then((response) => response.json())
    .then((data) => {
        activityElement.innerText = data;
    })
    .catch((error) => {
        activityElement.innerText = 'К сожалению, произошла ошибка';
    });
}

/**
 * Асинхронно получает случайное слово с API и отображает его в элементе с ID "activity".
 * В случае ошибки отображает сообщение об ошибке.
 * 
 * @async
 * @function getRandomActivityAsync
 * @returns {Promise<void>}
 */
async function getRandomActivityAsync() {
    const activityElement = document.getElementById('activity');
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        activityElement.innerText = data;
    } catch (error) {
        activityElement.innerText = 'К сожалению, произошла ошибка';
    }
}

export { getRandomActivity, getRandomActivityAsync };