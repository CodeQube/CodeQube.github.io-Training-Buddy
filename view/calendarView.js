function calendarView() {
  document.getElementById('app').innerHTML = `
          <div class="calendarHeader">${drawCalendarHeader()}</div>
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
    	<div>${filterIcon}</div>
      <div onclick="setCalendarSubPage('upcoming')" style="opacity: ${
        model.app.subPage === 'upcoming' ? '100%' : '50%'
      }">Kommende</div>
			<div onclick="setCalendarSubPage('history')" style="opacity: ${
        model.app.subPage === 'history' ? '100%' : '50%'
      }">Historikk</div>
      <div onclick="setCalendarSubPage('active')" style="opacity: ${
        model.app.subPage === 'active' ? '100%' : '50%'
      }">Aktive</div>
    `;
}

//View for upcomming events
function calendarUpcomingView() {
  //Filtrere eventer som du har meldt deg på etter dato og tid

  return `hei`;
}

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
