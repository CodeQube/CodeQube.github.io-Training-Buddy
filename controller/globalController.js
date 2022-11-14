function setActivePage(page) {
  switch (page) {
    case 'home':
      model.app.activePage = 'home';
      mainView();
      break;
    case 'calendar':
      model.app.activePage = 'calendar';
      model.app.subPage = 'upcoming';
      mainView();
      break;
    case 'createNew':
      model.app.activePage = 'createNewEvent';
      mainView();
      break;
    case 'leaderboard':
      model.app.activePage = 'leaderboard';
      mainView();
      break;
    case 'profile':
      model.app.activePage = 'profile';
      mainView();
      break;
  }
}
