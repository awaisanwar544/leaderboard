import { newGameId } from './gameId.js';

const getScore = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return response.json();
};

const populateScoreList = () => {
  const SCORES_URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${newGameId.id}/scores/`;
  const res = getScore(SCORES_URL);
  const list = document.querySelector('#scoreLis-ul');
  res.then((data) => {
    list.innerHTML = '';
    data.result.sort((a, b) => (a.score < b.score ? 1 : -1)).forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<p class="index">${index + 1}</p> <p class="player">${item.user}</p> <p class="player player-score"> ${item.score}</p>`;
      list.appendChild(li);
    });
  });
};

export default populateScoreList;