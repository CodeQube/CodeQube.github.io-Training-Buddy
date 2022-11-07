function drawHeaderHome() {
	let headerHTML = `
  <div class="headerHomeContainer">
    <div class="filterContainer">
      <div class="filterIcon">${filterIcon}
      </div>
      <div class="searchIcon">${searchIcon}
      </div>
    </div>
    <div class="headerPages">
      <div class="allPage">Alle</div>
      <div class="recommendedPage">Anbefalt</div>
    </div>
    <div class="notificationContainer">${notificationIcon}
    </div>
  </div>
  `;
	return headerHTML;
}

function drawFooter() {
	let footerHTML = `
  <div class="footerContainer">
    <div style="cursor: pointer;">${homeButton}</div>
    <div style="cursor: pointer;">${leaderboardButton}</div>
    <div style="cursor: pointer;">${createNewEventButton}</div>
    <div style="cursor: pointer;">${calendarButton}</div>
    <div style="cursor: pointer;">${profileButton}</div>
  </div>
  `;
	return footerHTML;
}
