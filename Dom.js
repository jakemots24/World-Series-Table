const bravesGames = [
  {
    homeTeam: {
      team: 'Houston',
      runs: 2,
      win: false,
    },
    awayTeam: {
      team: 'Atlanta',
      runs: 6,
      win: true,
    },
  },
  {
    homeTeam: {
      team: 'Houston',
      runs: 7,
      win: true,
    },
    awayTeam: {
      team: 'Atlanta',
      runs: 2,
      win: false,
    },
  },
  {
    homeTeam: {
      team: 'Atlanta',
      runs: 2,
      win: true,
    },
    awayTeam: {
      team: 'Houston',
      runs: 0,
      win: false,
    },
  },
  {
    homeTeam: {
      team: 'Atlanta',
      runs: 3,
      win: true,
    },
    awayTeam: {
      team: 'Houston',
      runs: 2,
      win: false,
    },
  },
  {
    homeTeam: {
      team: 'Atlanta',
      runs: 5,
      win: false,
    },
    awayTeam: {
      team: 'Houston',
      runs: 9,
      win: true,
    },
  },
  {
    homeTeam: {
      team: 'Houston',
      runs: 0,
      win: false,
    },
    awayTeam: {
      team: 'Atlanta',
      runs: 7,
      win: true,
    },
  },
];

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');
  for (let game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    ulParent.append(gameLi);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.win;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, runs: hRuns } = homeTeam;
  const { team: aTeam, runs: aRuns } = awayTeam;
  const teamNames = `${aTeam} @${hTeam}`;
  let scoreLine;
  if (aRuns > hRuns) {
    scoreLine = `<b>${aRuns}</b> - ${hRuns}`;
  } else {
    scoreLine = `${aRuns} - <b>${hRuns}</b>`;
  }
  return `${teamNames} ${scoreLine}`;
};

const atlantaSection = document.querySelector('#ab');
const houstonSection = document.querySelector('#ha');
const abChart = makeChart(bravesGames, 'Atlanta');
const haChart = makeChart(bravesGames, 'Houston');
atlantaSection.append(abChart);
houstonSection.append(haChart);
