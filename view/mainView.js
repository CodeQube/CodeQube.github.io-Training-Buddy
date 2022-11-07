//Main View That controlls active pages
mainView();
function mainView() {
	let activePage = model.app.activePage;
	if (activePage === "home") {
		homeView();
	}
	if (activePage === "forYou") {
		forYouView();
	}
	if (activePage === "leaderboard") {
		leaderboardView();
	}
	if (activePage === "createNewEvent") {
		createNewView();
	}
	if (activePage === "active") {
		calendarActiveView();
	}
	if (activePage === "history") {
		calendarHistoryView();
	}
	if (activePage === "upcoming") {
		calendarUpcomingView();
	}
	if (activePage === "profile") {
		profileBioView();
	}
	if (activePage === "reviews") {
		profileReviewsView();
	}
	if (activePage === "eventsCreated") {
		profileEventsCreatedView();
	}
}
