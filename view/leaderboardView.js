//Leaderboard view
function leaderboardView() {
	let content = drawLeaderboard();
	let footer = drawFooter();
	document.getElementById("app").innerHTML = `
  <div class="contentContainer">${drawLeaderboard()}</div>
  ${drawFooter()}
  `;
}

function drawLeaderboard() {
	return;
}
