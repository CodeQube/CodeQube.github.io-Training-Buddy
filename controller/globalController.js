function setActivePage(page) {
  model.app.state.selectedCard = null;
  model.app.state.selectedUser = model.app.state.activeUser;
  switch (page) {
    case 'home':
      model.app.activePage = 'home';
      model.app.subPage = 'home';
      filterEvents();
      mainView();
      break;
    case 'forYou':
      model.app.activePage = 'home';
      model.app.subPage = 'forYou';
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

function attendEvent(eventId) {
  const userName = model.app.state.activeUser;
  const allEventParticipants = model.data.eventParticipants;
  const eventParticipants = allEventParticipants.filter(
    (e) => e.eventId === eventId
  );
  const people = eventParticipants.map((ep) => ep.userName);
  const isAlreadyAdded = people.includes(userName);
  const event = model.data.events.find((e) => e.eventId == eventId);
  const eventIsFull = eventParticipants.length >= event.EventMaxAttendees;
  if (isAlreadyAdded || eventIsFull) return;
  allEventParticipants.push({ eventId, userName, isConfirmed: false });
  mainView();
}

function removeFromEvent(eventId) {
  const userName = model.app.state.activeUser;
  const allEventParticipants = model.data.eventParticipants;
  const eventParticipants = allEventParticipants.filter(
    (e) => e.eventId === eventId
  );

  const user = eventParticipants.filter((u) => u.userName == userName);
  model.testvalue = user;

  const index = allEventParticipants.indexOf(user[0]);
  if (user[0].userName === userName) {
    model.data.eventParticipants.splice(index, 1);
  }
  mainView();
}
