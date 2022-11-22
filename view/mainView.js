//Main View That controlls active pages
mainView();
function mainView() {
  let activePage = model.app.activePage;

  if (activePage === 'home') {
    homeView();
  }

  if (activePage === 'forYou') {
    forYouView();
  }

  if (activePage === 'leaderboard') {
    leaderboardView();
  }

  if (activePage === 'createNewEvent') {
    createNewView();
  }

  if (activePage === 'calendar') {
    calendarView();
  }

  if (activePage === 'profile') {
    profileBioView();
  }
}



// TODO: Formatere til denne senere
// mainView();
// function mainView() {
//   let activePage = model.app.activePage;
//   let html = '';

//   if (activePage === 'home') html = homeView();

//   if (activePage === 'forYou') {
//     forYouView();
//   }

//   if (activePage === 'leaderboard') {
//     leaderboardView();
//   }

//   if (activePage === 'createNewEvent') {
//     createNewView();
//   }

//   if (activePage === 'calendar') {
//     calendarView();
//   }

//   if (activePage === 'profile') {
//     profileBioView();
//   }
// }
