function setUserRanking() {
	model.data.leaderboardArray = [];
	let sortedUsersPoints = model.data.users.sort(
		(a, b) => parseFloat(b.userPoints) - parseFloat(a.userPoints)
	);
	sortedUsersPoints.forEach((item) => {
		model.data.leaderboardArray.push({
			name: item.userName,
			userPoints: item.userPoints,
		});
	});
}

function userClick(user) {
	model.app.state.selectedUser = user;
	console.log("User", model.app.state.selectedUser);
	model.app.activePage = "profile";
	mainView();
}
