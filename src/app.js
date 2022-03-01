// eslint-disable-next-line no-unused-vars
import style from './main.css';
import addScore from './modules/addScore.js';
import scoresList from './modules/scoresList.js';

const main = document.getElementById('main');

main.appendChild(scoresList());
main.appendChild(addScore());