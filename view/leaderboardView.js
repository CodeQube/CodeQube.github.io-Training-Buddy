//Leaderboard view
function leaderboardView() {
  document.getElementById('app').innerHTML = `
  <div class="leaderboardContentContainer">${drawLeaderboard()}</div>
  ${drawFooter()}
  `;
}

function drawLeaderboard() {
  //loope igjennom userRankings og lage data tables
  let html = '';
  html += /*HTML*/ `
		<div class="leaderboardHeader">
			<h1>Toppliste</h1>
			<span class="rangering">Rangering</span>
			<span class="brukernavn">Brukernavn</span>
			<span class="poeng">Poeng</span>
		</div>
		<div class="listContainer">
			${drawList()}
		</div>
	`;
  return html;
}

function drawList() {
  setUserRanking();
  let leaderboardhtml = '';
  let leaderboard = model.data.leaderboardArray;
  for (let i = 0; i < leaderboard.length; i++) {
    leaderboardhtml += `
		<div class="leaderboardDivContainer ${
      leaderboard[i].name === model.app.state.activeUser ? 'activeUser' : ''
    }">
			<div class="leaderboardDivLiten" style="border-left: 2px solid #1E1E1E;">${
        i + 1
      }</div>
			<div onclick="userClick('${leaderboard[i].name}')" class="leaderboardDivStor">${
      leaderboard[i].name
    }</div>
			<div class="leaderboardDivLiten">${leaderboard[i].userPoints}</div>
		</div>`;
  }
  return leaderboardhtml;
}
