function setCalendarSubPage(subPage) {
  model.app.subPage = subPage;
  mainView();
}

function setActiveReviewEvent(id) {
  setCalendarSubPage('review');
  model.app.state.activeReviewEvent = id;
  mainView();
}

function confirmParticipant(index) {
  console.log(index);
  model.data.eventParticipants[index].isConfirmed =
    !model.data.eventParticipants[index].isConfirmed;
  mainView();
}

function showActiveParticipants(i) {
  //Draws the event participants
  let participants = '';
  let events = model.data.eventParticipants.filter((ep) => ep.eventId === i);

  // console.log(events);
  events.forEach(
    (participant, i) =>
      (participants += `<img src="${
        participant.userImg
      }" class="eventParticipantsFixed" style="${
        events[i].isConfirmed
          ? 'border: 2px solid #38FF17;'
          : 'border: 2px solid #FF1717;'
      }"
      onclick="confirmParticipant(${i})"></img>`)
  );

  return participants;
}
