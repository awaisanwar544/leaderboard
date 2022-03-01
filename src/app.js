// eslint-disable-next-line no-unused-vars
import style from './main.css';
import addScore from './modules/addScore.js';
import addScoreUI from './modules/addScoreUI.js';
import { gameID } from './modules/gameId.js';
import refreshBtn from './modules/refresh.js';
import scoresListUI from './modules/scoresListUI.js';

window.onload = () => {
  const main = document.getElementById('main');
  main.appendChild(scoresListUI());
  main.appendChild(addScoreUI());
  gameID();
  addScore();
  refreshBtn();
};