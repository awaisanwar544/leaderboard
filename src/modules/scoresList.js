import input from './input.js';

const scoresList = () => {
  const section = document.createElement('section');
  section.setAttribute('id', 'scoreList-container');

  section.innerHTML = `
                <h2>Recent Score</h2>
                ${input('button', 'refresh-btn', 'btn', '', 'Refresh')}
                <div id="scoreList">
                    <ul>
                        <li>name: 100</li>
                        <li>name: 50</li>
                        <li>name: 20</li>
                        <li>name: 30</li>
                        <li>name: 125</li>
                    </ul>
                </div>
    `;
  return section;
};

export default scoresList;