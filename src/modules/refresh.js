import populateScoreList from './populateScoreList.js';

const refreshBtn = () => {
  const refresh = document.getElementById('refresh-btn');
  refresh.addEventListener('click', () => {
    populateScoreList();
  });
};

export default refreshBtn;