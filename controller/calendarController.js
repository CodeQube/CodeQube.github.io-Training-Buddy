function setCalendarSubPage(subPage) {
  model.app.subPage = subPage;
  model.app.state.selectedCard = null;
  mainView();
}

function setActiveReviewEvent(eventId) {
  model.app.state.activeReviewEvent = eventId;

  let participants = model.data.eventParticipants
    .filter(
      (ep) =>
        ep.eventId === eventId &&
        ep.isConfirmed === true &&
        ep.userName !== model.app.state.activeUser
    )
    .map((ep) => model.data.users.find((u) => u.userName === ep.userName));

  model.inputs.review = {
    eventId: eventId,
    eventReview1: model.app.state.starsCount1,
    eventReview2: model.app.state.starsCount1,
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

function confirmParticipant(index) {
  model.data.eventParticipants[index].isConfirmed =
    !model.data.eventParticipants[index].isConfirmed;
  mainView();
}

//bekrefte alle som var med, gi poeng til deltagerne og gi poeng til den som lagde eventet

function handleConfirmEvent(index) {
  let event = model.data.events.find((e) => e.eventId === index);
  event.eventIsClosed = true;

  let participant = model.data.eventParticipants.filter(
    (ep) => ep.eventId === index && ep.isConfirmed === true
  );

  participant.map((t) => {
    let user = model.data.users.find((u) => u.userName === t.userName);
    user.userPoints += 100;
  });

  giveUserPoints();
  model.app.state.selectedCard = null;
  mainView();
}

function giveUserPoints() {
  let eventOwner = model.data.users.find(
    (user) => user.userName === model.app.state.activeUser
  );
  eventOwner.userPoints += 150;
}

function handleStars(i, num) {
  if (num === 1) {
    model.app.state.starsCount1 = i;
  }
  if (num === 2) {
    model.app.state.starsCount2 = i;
  }

  mainView();
}

function handleStarsParticipants(starId, participantId) {
  model.inputs.review.userReviews[participantId].score = starId;
  mainView();
}

function handleGiveReviewStars1() {
  let html = '';
  for (let i = 1; i < 6; i++) {
    html += `<div onclick="handleStars(${i}, 1)" class="testTest" id="${i + 1}">
		${model.app.state.starsCount1 >= i ? starsIcon : starsEmptyIcon}
    </div>
  `;
  }
  return html;
}

function handleGiveReviewStars2() {
  let html = '';
  for (let i = 1; i < 6; i++) {
    html += `<div onclick="handleStars(${i}, 2)" class="testTest" id="${i + 1}">
		${model.app.state.starsCount2 >= i ? starsIcon : starsEmptyIcon}
    </div>
  `;
  }
  return html;
}

function handleGiveReviewStarsParticipants(index) {
  let html = '';
  for (let i = 1; i < 6; i++) {
    html += `<div onclick="handleStarsParticipants(${i}, ${index})" class="reviewStarsParticipants" id="${
      i + 1
    }">
		${
      model.inputs.review.userReviews[index].score >= i
        ? starsIcon
        : starsEmptyIcon
    }
    </div>
  `;
  }
  return html;
}

function sendReview() {
  let userReview = model.inputs.review.userReviews;
  let event = model.data.events.find(
    (e) => e.eventId === model.inputs.review.eventId
  );
  userReview.map((ur, index) => {
    let user = model.data.users.find((u) => u.userName === ur.userName);
    user.userReviews.push({
      reviewSubmitter: model.app.state.activeUser,
      reviewScore: userReview[index].score,
      reviewDescription: userReview[index].text,
    });
  });

  let eventReview1 = model.inputs.review.eventReview1;
  let eventReview2 = model.inputs.review.eventReview2;
  event.eventReviews.push({
    eventReview1,
    eventReview2,
  });

  model.data.eventParticipants.find(
    (ep) => ep.userName === model.app.state.activeUser
  ).hasReviewed = true;

  model.app.state.selectedCard = null;
  setCalendarSubPage('upcoming');
  mainView();
}

function showActiveParticipants(i) {
  //Draws the event participants
  let participants = '';
  let events = model.data.eventParticipants.filter((ep) => ep.eventId === i);

  events.forEach((participant, index) => {
    let filter = model.data.users.find(
      (u) => u.userName === events[index].userName
    );
    participants += `<img src="${
      filter.userProfileImg
    }" class="eventParticipantsFixed" style="${
      events[index].isConfirmed
        ? 'border: 2px solid #38FF17;'
        : 'border: 2px solid #FF1717;'
    }"
	    onclick="confirmParticipant(${index})"></img>`;
  });

  return participants;
}
