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
    <div onclick="setActivePage('home')" style="cursor: pointer;">${homeButton}</div>
    <div onclick="setActivePage('leaderboard')" style="cursor: pointer;">${leaderboardButton}</div>
    <div onclick="setActivePage('createNew')" style="cursor: pointer;">${createNewEventButton}</div>
    <div onclick="setActivePage('calendar')" style="cursor: pointer;">${calendarButton}</div>
    <div onclick="setActivePage('profile')" style="cursor: pointer;">${profileButton}</div>
  </div>
  `;
	return footerHTML;
}

function drawConfirmLocation(str) {
	let confirmLocationHTML = `
  <div class="confirmLocationContainer">
  <span>Du befinner deg i: ${model.inputs.newEventLocation} </br>
  Bekreft lokasjon
  </span>
  <button onclick="handleLocation('ja')">Ja</button>
  <button onclick="handleLocation('nei')">Nei</button>
  </div>
  `;
	return confirmLocationHTML;
}
