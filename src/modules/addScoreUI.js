import input from './input.js';

const addScoreUI = () => {
  const section = document.createElement('section');
  section.setAttribute('id', 'addScore-container');
  section.innerHTML = `
            <h2>Add your Score</h2>
            ${input('text', 'name', '', 'Your Name', '')}
            <br>
            ${input('number', 'score', '', 'Your Score', '')}
            <br>
            ${input('button', 'score-btn', 'btn', '', 'Add Score')}
    `;
  return section;
};

export default addScoreUI;