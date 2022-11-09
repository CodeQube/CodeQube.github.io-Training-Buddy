//View for profile bio
// //FILTER
// let selectedUser = model.app.state.selectedUser;
// let currentUser = model.data.users.filter((user) => {
// 	return user.userName === selectedUser;
// });

function profileBioView() {
	document.getElementById("app").innerHTML = `
    <div class="profileHeader">${drawProfile()}</div>
    <div class="bioContainer">${drawBio()}</div>
    ${drawFooter()}
    `;
}
function drawBio() {
	let selectedUser = model.app.state.selectedUser;
	let currentUser = model.data.users.filter((user) => {
		return user.userName === selectedUser;
	});
	let bioHTML = "";
	bioHTML = /*HTML*/ `
    <img src="">
    <span class="profileDesc">${currentUser[0].userDescription}</span>
    <div class="profileTagContainer">
      ${drawUserTags()}
    </div>
  `;
	return bioHTML;
}

function drawUserTags() {
	let selectedUser = model.app.state.selectedUser;
	let currentUser = model.data.users.filter((user) => {
		return user.userName === selectedUser;
	});
	let userTagsHTML = "";
	for (let i = 0; i < currentUser[0].userTags.length; i++) {
		userTagsHTML += `<div class="profileTag" id="${i}">${currentUser[0].userTags[i]}</div>`;
	}
	return userTagsHTML;
}

//View for profile reviews
function profileReviewsView() {}

//View for profile events created
function profileEventsCreatedView() {}

function drawProfile() {
	let selectedUser = model.app.state.selectedUser;
	let currentUser = model.data.users.filter((user) => {
		return user.userName === selectedUser;
	});
	let profileHTML = "";
	profileHTML = /*HTML*/ `
  <div class="icon">${settingsIcon}</div>
  <img src="${currentUser[0].userProfileImg}">
  <div class="profileNameLoc">
    <span class="profileUsername">${currentUser[0].userName}</span>
    <span class="profileLoc">${currentUser[0].userLocation}</span>
  </div>
  <div class="dotContainer">
  <span class="dotInactive">.</span>
  <span class="dotActive">.</span>
  <span class="dotInactive">.</span>
  </div>
  <div class="profileStatsContainer">

    <div class="profilePoeng">
      ${currentUser[0].userPoints}
      <span style="color: #6B6B6B;">Poeng</span>
    </div>

    <div class="laget">
      ${currentUser[0].userCreatedEventsCounter}
      <span style="color: #6B6B6B;">Økter laget</span>
    </div>

    <div class="deltatt">
      ${currentUser[0].userAttendedEventsCounter}
      <span style="color: #6B6B6B;">Økter deltatt</span>
    </div>

  </div>
  `;
	return profileHTML;
}
