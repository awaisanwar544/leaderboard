import newGame from './newGame.js';

const URL_API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const newGameId = { id: '' };

const gameID = () => {
  newGame(URL_API, { name: 'hello' })
    .then((response) => {
      newGameId.id = response.result.replace(/(\b(\w{1,9})\b(\W|$))/g, '').replace(/^\s+|\s+$/, '').replace(/\s+/, '');
    });
  return newGameId;
};

export { gameID, newGameId };