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
		// setUserRanking(); // Henter ut userPoints og sorterer brukere etter riktig rangering
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
		// setUserRanking(); // Henter ut userPoints og sorterer brukere etter riktig rangering
		profileBioView();
	}
	if (activePage === "reviews") {
		profileReviewsView();
	}
	if (activePage === "eventsCreated") {
		profileEventsCreatedView();
	}
}
