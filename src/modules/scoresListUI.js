import input from './input.js';

const scoresListUI = () => {
  const section = document.createElement('section');
  section.setAttribute('id', 'scoreList-container');
  section.setAttribute('class', 'g-container');

  section.innerHTML = `
                <div id="score-head">
                  <h2>Recent Score</h2>
                  ${input('button', 'refresh-btn', 'btn', '', 'Refresh')}
                </div>
                <div id="scoreList">
                    <ul id="scoreLis-ul">
                        
                    </ul>
                </div>
    `;
  return section;
};

export default scoresListUI;