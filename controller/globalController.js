function setActivePage(page) {
	switch (page) {
		case "home":
			model.app.activePage = "home";
			mainView();
			break;
		case "calendar":
			model.app.activePage = "calendar";
			model.app.subPage = "upcoming";
			mainView();
			break;
		case "createNew":
			model.app.activePage = "createNewEvent";
			mainView();
			break;
		case "leaderboard":
			model.app.activePage = "leaderboard";
			mainView();
			break;
		case "profile":
			model.app.activePage = "profile";
			mainView();
			break;
	}
}

function attendEvent(eventId) {
	let people = [];
	const events = model.data.eventParticipants.filter(
		(event) => event.eventId === eventId
	);
	events.forEach((person) => people.push(person.userName));
	if (
		people.includes(model.app.state.activeUser) ||
		events.length >= model.data.events[eventId].EventMaxAttendees
	) {
		return;
	}
	console.log(people);
	// events.length < eventPartcipantLimit
	model.data.eventParticipants.push({
		eventId: eventId,
		userName: model.app.state.activeUser,
	});
	mainView();
}
// events.userName === model.app.state.activeUser
// ||
