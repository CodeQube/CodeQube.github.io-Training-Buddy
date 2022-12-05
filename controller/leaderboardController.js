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
  model.app.activePage = 'profile';
  model.app.subPage = 'bio';
  mainView();
}
