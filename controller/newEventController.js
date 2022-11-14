function handleCreateNewEvent() {
  let event = model.inputs;
  model.data.events.push({
    eventId: 0,
    eventOwnerId: model.app.state.activeUser,
    eventName: event.newEventName,
    eventLocation: event.newEventLocation,
    eventIcon: `${event.newEventCategory}Icon`, // This gets its value from the category array by a controller function this.categories[0].icon
    eventImg: model.inputs.newEventBgImg, //  This gets its value from the category array by a controller function this.categories[0].bgImg
    eventImgOpen: model.inputs.newEventBgImg, //  This gets its value from the category array by a controller function this.categories[0].bgImg
    eventCategory: model.inputs.newEventCategory,
    eventSubCategory: event.newEventSubCategory,
    eventIntensity: event.newEventIntensity,
    eventDate: model.inputs.newEventDate,
    eventTime: model.inputs.newEventTime,
    eventDescTitle: event.newEventDescTitle,
    eventDescription: event.newEventDescription,
    eventParticipants: [],
  });
  model.app.activePage = 'home';
  mainView();
}

function checkNewEventCategory() {
  switch (model.inputs.newEventSubCategory) {
    case 'Langdistanseløp':
    case 'Friløp':
    case 'Halvmaraton':
      model.inputs.newEventCategory = 'Løping';
      model.inputs.newEventBgImg = `./images/bg/løping.jpg`;
      model.inputs.newEventBgImg = `./images/bg/løpingOpen.jpg`;
      break;

    case 'Rygg':
    case 'Ben':
    case 'Armer':
    case 'Bryst':
      model.inputs.newEventCategory = 'Styrke';
      model.inputs.newEventBgImg = `./images/bg/styrke.jpg`;
      model.inputs.newEventBgImg = `./images/bg/styrkeOpen.jpg`;
      break;

    case 'Spinning':
    case 'Downhill':
    case 'Terreng':
    case 'Vei':
      model.inputs.newEventCategory = 'Sykling';
      model.inputs.newEventBgImg = `./images/bg/sykling.jpg`;
      model.inputs.newEventBgImg = `./images/bg/syklingOpen.jpg`;
      break;

    case 'Butterfly':
    case 'Synkronsvømming':
      model.inputs.newEventCategory = 'Svømming';
      model.inputs.newEventBgImg = `./images/bg/svømming.jpg`;
      model.inputs.newEventBgImg = `./images/bg/svømmingOpen.jpg`;
      break;
  }
}

function handleNewEventIntensity(action) {
  if (
    model.inputs.newEventIntensity <= 4 ||
    model.inputs.newEventIntensity >= 1
  ) {
    if (action === 'minus') {
      model.inputs.newEventIntensity--;
    } else {
      model.inputs.newEventIntensity++;
    }
  } else {
    return;
  }
  mainView();
}

function handleNewEventAttendees(action) {
  if (
    model.inputs.newEventMaxAttendees <= 4 ||
    model.inputs.newEventMaxAttendees >= 1
  ) {
    if (action === 'minus') {
      model.inputs.newEventMaxAttendees--;
    } else {
      model.inputs.newEventMaxAttendees++;
    }
  } else {
    return;
  }
  mainView();
}

function formatDateTime(value) {
  let date = value.split('T').splice(0, 1).toString();
  let time = value.split('T').splice(1, 1).toString();
  (model.inputs.newEventDate = date), (model.inputs.newEventTime = time);
}

async function setLocation(long, lat) {
  let api = `https://api.maptiler.com/geocoding/${long},${lat}.json?key=d8oK0KJnl1dSUcmckomp`;
  fetch(api)
    .then((response) => response.json())
    .then(
      (json) => (model.inputs.newEventLocation = json.features[2].place_name)
    );
  // drawConfirmLocation(str);
  console.log(model.inputs.newEventLocation);
  mainView();
}
