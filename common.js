//View for profile bio
// function setCurrentUser() {
//   let selectedUser = model.app.state.selectedUser;
//   let currentUser = model.data.users.filter((user) => {
//     return user.userName === selectedUser;
//   });

//   return currentUser;
// }

function getCurrentUser() {
  let selectedUser = model.app.state.selectedUser;
  return model.data.users.find((user) => user.userName === selectedUser);
}

function getSubmitter(i) {
  let submitter = getCurrentUser().userReviews[i].reviewSubmitter;
  return model.data.users.find((user) => user.userName === submitter);
}

function getUpcomingEvents(i) {
  return model.data.events.filter(
    (event) =>
      event.eventParticipants[i].userName === model.app.state.activeUser
  );
}

function hardcoreTestFunc() {
  let filter = '';
  model.data.events.forEach(
    (event) =>
      (filter = event.eventParticipants.filter((user) => user.userName))
  );
  console.log(filter);
}

//Alternativ Løsning
// function getCurrentUserField(fieldName) {
//   let selectedUser = model.app.state.selectedUser;
//   let userObj = model.data.users.find((user) => user.userName === selectedUser);
//   return userObj[fieldName];
// }
