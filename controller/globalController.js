function setActivePage(page) {
	switch (page) {
		case "home":
			model.app.activePage = "home";
			model.app.state.selectedCard = null;
			mainView();
			break;
		case "calendar":
			model.app.activePage = "calendar";
			model.app.subPage = "upcoming";
			model.app.state.selectedCard = null;

			mainView();
			break;
		case "createNew":
			model.app.activePage = "createNewEvent";
			model.app.state.selectedCard = null;

			mainView();
			break;
		case "leaderboard":
			model.app.activePage = "leaderboard";
			model.app.state.selectedCard = null;

			mainView();
			break;
		case "profile":
			model.app.activePage = "profile";
			model.app.state.selectedCard = null;

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

// function attendEvent(eventId) {
//   let people = [];
//   const events = model.data.eventParticipants.filter(
//     (event) => event.eventId === eventId
//   );
//   events.forEach((person) => people.push(person.userName));
//   if (
//     people.includes(model.app.state.activeUser) ||
//     events.length >= model.data.events[eventId].EventMaxAttendees
//   ) {
//     return;
//   }
//   console.log(people);
//   // events.length < eventPartcipantLimit
//   model.data.eventParticipants.push({
//     eventId: eventId,
//     userName: model.app.state.activeUser,
//   });
//   mainView();
// }
// events.userName === model.app.state.activeUser
// ||
