// eslint-disable-next-line no-unused-vars
import style from './main.css';
import addScore from './modules/addScore.js';
import addScoreUI from './modules/addScoreUI.js';
import { gameID } from './modules/gameId.js';
import scoresListUI from './modules/scoresListUI.js';

const main = document.getElementById('main');
main.appendChild(scoresListUI());
main.appendChild(addScoreUI());
const refresh = document.getElementById('refresh-btn');

refresh.addEventListener('click', () => {
  document.querySelector('#scoreLis-ul').innerHTML = '';
  gameID();
});

window.onload = () => {
  gameID();
  addScore();
};