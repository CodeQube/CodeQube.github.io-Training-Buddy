function calendarView() {
  document.getElementById('app').innerHTML = `
          <div class="calendarHeaderContainer">${drawCalendarHeader()}</div>
          <div class="calendarContainer">${selectCalendarView()}</div>
          ${drawFooter()}
          `;
}

function selectCalendarView() {
  switch (model.app.subPage) {
    case 'active':
      return calendarActiveView();
    case 'history':
      return calendarHistoryView();
    case 'upcoming':
      return calendarUpcomingView();
  }
}

function drawCalendarHeader() {
  return `
  <div class="calendarHeader">
    	<div>${filterIcon}</div>
      <span onclick="setCalendarSubPage('upcoming')" style="opacity: ${
        model.app.subPage === 'upcoming' ? '100%' : '50%'
      }">Kommende</span>
			<span onclick="setCalendarSubPage('history')" style="opacity: ${
        model.app.subPage === 'history' ? '100%' : '50%'
      }">Historikk</span>
      <span onclick="setCalendarSubPage('active')" style="opacity: ${
        model.app.subPage === 'active' ? '100%' : '50%'
      }">Aktive</span>
      </div>
    `;
}

//View for upcomming events
// function calendarUpcomingView() {
//   //Filtrere eventer som du har meldt deg på etter dato og tid
//   for (let i = 0; i < filter.length; i++) {

//   }
//   // console.log(filter);
// }

function calendarUpcomingView() {
  let events = model.data.eventParticipants
    .filter((ep) => ep.userName === model.app.state.activeUser)
    .map((ep) => model.data.events.find((e) => e.eventId === ep.eventId));

  let cardsHtml = '';
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    // console.log(getUpcomingEvents);
    const isCardOpen = model.app.state.selectedCard === i;
    cardsHtml += `<div>${
      isCardOpen
        ? // Open Card
          `
        <div class="eventCardOpen" id="#${i}">
          <div class="intensityBar" style="background-color: ${setIntensityBar(
            i
          )};" ></div>
              <div class="eventImgContainer">
                <img class="eventImgBg" src="${
                  event.eventImgOpen
                }" alt="Event image">
            </div>
            <div class="participantContainer">
              <div>Påmeldte</div>
              <div class="participantImgContainer">
                ${showParticipants(i)}
              </div>
              <div class="intensityContainer">
              ${setIntensityIcon(i)}
                <div>intensitet</div>
              </div>
              <button class="eventSignUpBtn">Meld på</button>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${event.eventName}</div>
              <div class="eventLocation">${event.eventLocation}</div>
              <div class="eventCategoryContainer">
                <div class="eventSubCategory">${event.eventSubCategory}</div>
                ${setEventCategory(i)}
              </div>
              <div class="eventDescContainer">
                <div class="eventDescTitle">${event.eventDescTitle}</div>
                <div class="eventDescription">${event.eventDescription}</div>
              </div>

              <div class="eventDateTimeOpen">
                <div class="eventTime">${event.eventTime}</div>
                <div class="eventDate">${event.eventDate}</div>
              </div>
            </div>
            <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

          </div>
        `
        : //Closed Card
          `
        <div class="eventCard"  id="#${i}">
          <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
            i
          )};" ></div>
            <div class="eventImgContainer">
              <img class="eventImgBg" src="${event.eventImg}" alt="Event image">
          </div>
          <div class="eventInfoContainer">
            <div class="eventTitle">${event.eventName}</div>
            <div class="eventDateTime">
              <div class="eventTime">${event.eventTime}</div>
              <div class="eventDate">${event.eventDate}</div>
            </div>
            <div class="eventLocation">${event.eventLocation}</div>
          </div>
          <div class="eventCategoryContainerClosed">
              <div class="eventSubCategory">${event.eventSubCategory}</div>
              ${setEventCategory(i)}
            </div>
            <div class="intensityContainerClosed">
              ${setIntensityIcon(i)}
              <div>intensitet</div>
            </div>
          <div href="#${i}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
        </div>
      `
    }</div>`;
  }
  return cardsHtml;
}

// let filteredEvents = model.data.events.filter(
//   (event) => event.eventOwnerId === model.app.state.selectedUser
// );

//View for history events
function calendarHistoryView() {
  //Filtrere eventer som har skjedd hvor du har blitt bekreftet
  //når skaperen av et event trykker at du er bekreftet legges navnet ditt inn i et array i det respektive eventet

  return `hei`;
}

//View for active events
function calendarActiveView() {
  //filterere dine aktive økter som du har laget, kunne redigere og slette samt bekrefte påmeldte bruekere

  return `hei`;
}
