import { newGameId } from './gameId.js';

const createScore = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const addScore = async () => {
  const scoreBtn = document.querySelector('#score-btn');
  const nameField = document.querySelector('#name');
  const scoreField = document.querySelector('#score');
  scoreBtn.addEventListener('click', () => {
    const SCORES_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${newGameId.id}/scores/`;
    if (nameField.value && scoreField.value) {
      const scoreData = {
        user: nameField.value,
        score: Number(scoreField.value),
      };
      nameField.value = '';
      scoreField.value = '';
      createScore(SCORES_URL, scoreData);
    }
  });
};

export default addScore;