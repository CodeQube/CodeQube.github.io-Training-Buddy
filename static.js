function drawHeaderHome() {
  let headerHTML = /*HTML*/ `
  <div class="headerHomeContainer">
    <div class="filterContainer">
      <div class="filterIcon">${filterIconfunc()}
        <div class="filterMenu" style="${
          model.app.state.filterList === false ? 'display:none' : ''
        }">
        <div>
        <input onclick="setFilteredCategory(this.name)" type="checkbox" name="" ${
          model.inputs.filters.category == '' ? 'checked' : ''
        }>
        <label for="ingen">Alle</label>
      </div>
        <div>
          <input onclick="setFilteredCategory(this.name)" type="checkbox" name="Løping" ${
            model.inputs.filters.category == 'Løping' ? 'checked' : ''
          }>
          <label for="løping">Løping</label>
        </div>
        <div>
          <input onclick="setFilteredCategory(this.name)" type="checkbox" name="Styrke" ${
            model.inputs.filters.category == 'Styrke' ? 'checked' : ''
          } >
          <label for="styrke">Styrke</label>
          </div>
          <div>
            <input onclick="setFilteredCategory(this.name)" type="checkbox" name="Sykling" ${
              model.inputs.filters.category == 'Sykling' ? 'checked' : ''
            }>
            <label for="sykling">Sykling</label>
          </div>
          <div>
            <input onclick="setFilteredCategory(this.name)" type="checkbox" name="Svømming" ${
              model.inputs.filters.category == 'Svømming' ? 'checked' : ''
            }>
            <label for="svømming">Svømming</label>
          </div>
        </div>
      </div>
      <div class="searchIcon">${searchIconfunc()}
      <input style="${
        model.app.state.searchBar === false ? 'display:none' : ''
      }"type="text" autofocus placeholder="Søk etter økt her">
      </div>
    </div>
    <div class="headerPages" style="${
      model.app.state.searchBar === true ? 'display:none' : ''
    }">
      <div onclick="setActivePage('home')" class="allPage" style="${
        model.app.subPage === 'home' ? 'opacity: 100%' : 'opacity: 40%'
      }">Alle</div>
      <div onclick="setActivePage('forYou')" class="recommendedPage" style="${
        model.app.subPage === 'forYou' ? 'opacity: 100%' : 'opacity: 40%'
      }">Anbefalt</div>
    </div>
    <div class="notificationContainer">${notificationIcon}
    </div>
  </div>
  `;
  return headerHTML;
}

function setFilteredCategory(category) {
  model.inputs.filters.category = category;
  filterEvents();
  mainView();
}

function makeFilter() {
  model.app.state.filterList = !model.app.state.filterList;
  mainView();
}

function filterIconfunc() {
  return `<div onclick="makeFilter()">${filterIcon}</div>`;
}
function searchIconfunc() {
  return `<div onclick="makeSearchBar()">${searchIcon}</div>`;
}

function makeSearchBar() {
  model.app.state.searchBar = !model.app.state.searchBar;
  mainView();
}

function drawFooter() {
  let footerHTML = `
  <div class="footerContainer">
    <div onclick="setActivePage('home')" style="cursor: pointer;">${homeButton}</div>
    <div onclick="setActivePage('leaderboard')" style="cursor: pointer;">${leaderboardButton}</div>
    <div onclick="setActivePage('createNew')" style="cursor: pointer;">${createNewEventButton}</div>
    <div onclick="setActivePage('calendar')" style="cursor: pointer;">${calendarButton}</div>
    <div onclick="userClick('${model.app.state.activeUser}')" style="cursor: pointer;">${profileButton}</div>
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
