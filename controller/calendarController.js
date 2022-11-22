function setCalendarSubPage(subPage) {
  model.app.subPage = subPage;
  mainView();
}

function setActiveReviewEvent(eventId) {
  model.app.state.activeReviewEvent = eventId;

  let participants = model.data.eventParticipants
    .filter((ep) => ep.eventId === eventId && ep.isConfirmed === true)
    .map((ep) => model.data.users.find((u) => u.userName === ep.userName));

  model.inputs.review = {
    eventId: eventId,
    eventReview1: 0,
    eventReview2: 0,
    userReviews: [],
  };

  for (let i = 0; i < participants.length; i++) {
    model.inputs.review.userReviews.push({
      userName: participants[i].userName,
      score: 0,
      text: '',
    });
  }

  setCalendarSubPage('review');
}

function handleClickedUserStar(starId) {
  model.inputs.review.userReviews[starId].score = starId;
  mainView();
}

function handleClickedEventStar(starId) {
  model.inputs.review.eventReview.score = starId;
  mainView();
}

function confirmParticipant(index) {
  console.log(index);
  model.data.eventParticipants[index].isConfirmed =
    !model.data.eventParticipants[index].isConfirmed;
  mainView();
}

function handleGiveReviewStars(id, count) {
  return `<div onclick="handleClickedStar(${id})">${starsEmptyIcon.repeat(
    count
  )}</div>`;
}

function handleGiveUserReviewStars(id, count) {
  return `<div onclick="handleClickedStar(${id})">${starsEmptyIcon.repeat(
    count
  )}</div>`;
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
