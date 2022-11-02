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
    <div>${homeButton}</div>
    <div>${leaderboardButton}</div>
    <div>${createNewEventButton}</div>
    <div>${calendarButton}</div>
    <div>${profileButton}</div>
  </div>
  `;
  return footerHTML;
}
