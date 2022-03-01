import input from './input.js';

const scoresListUI = () => {
  const section = document.createElement('section');
  section.setAttribute('id', 'scoreList-container');

  section.innerHTML = `
                <h2>Recent Score</h2>
                ${input('button', 'refresh-btn', 'btn', '', 'Refresh')}
                <div id="scoreList">
                    <ul id="scoreLis-ul">
                        
                    </ul>
                </div>
    `;
  return section;
};

export default scoresListUI;