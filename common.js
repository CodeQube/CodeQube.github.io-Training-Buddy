function setIntensityIcon(i) {
  let intensityColor = '';
  let intensityIcon = '';
  switch (model.data.events[i].eventIntensity) {
    case 1:
      intensityColor = '#38FF17';
      intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
      break;
    case 2:
      intensityColor = '#FFC700';
      intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
      break;
    case 3:
      intensityColor = '#F24E1E';
      intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
      break;
    case 4:
      intensityColor = '#FF0000';
      intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
      break;
  }

  return intensityIcon;
}

function setIntensityBar(i) {
  let intensityColor = '';
  switch (model.data.events[i].eventIntensity) {
    case 1:
      intensityColor = '#38FF17';
      break;
    case 2:
      intensityColor = '#FFC700';
      break;
    case 3:
      intensityColor = '#F24E1E';
      break;
    case 4:
      intensityColor = '#FF0000';
      break;
  }
  return intensityColor;
}

function setEventCategory(i) {
  let eventCategory = '';
  switch (model.data.events[i].eventCategory) {
    case 'Løping':
      eventCategory = løpingIcon;
      break;
    case 'Styrke':
      eventCategory = styrkeIcon;
      break;
    case 'Svømming':
      eventCategory = svømmingIcon;
      break;
    case 'Sykling':
      eventCategory = syklingIcon;
      break;
  }
  return eventCategory;
}

function getCurrentUser() {
  let selectedUser = model.app.state.selectedUser;
  return model.data.users.find((user) => user.userName === selectedUser);
}

function getSubmitter(i) {
  let submitter = getCurrentUser().userReviews[i].reviewSubmitter;
  return model.data.users.find((user) => user.userName === submitter);
}

function showParticipants(i) {
  //Draws the event participants
  let participants = '';
  let events = model.data.eventParticipants.filter((ep) => ep.eventId === i);

  let pic = model.data.users.filter((p) =>
    model.data.eventParticipants.find((u) => u.userName === p.userName)
  );

  for (let index = 0; index < events.length; index++) {
    let filter = model.data.users.find(
      (u) => u.userName === events[index].userName
    );
    participants += `<img src="${filter.userProfileImg}" class="eventParticipants"></img>`;
  }

  return participants;
}
