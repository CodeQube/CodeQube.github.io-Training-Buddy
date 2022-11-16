//View for profile bio
// function setCurrentUser() {
//   let selectedUser = model.app.state.selectedUser;
//   let currentUser = model.data.users.filter((user) => {
//     return user.userName === selectedUser;
//   });
//   return currentUser;
// }

function profileBioView() {
  document.getElementById('app').innerHTML = `
    <div id="profileHeaderDrag" class="profileHeader">${drawProfile()}</div>
    ${selectProfileView()}
    ${drawFooter()}
    `;
  let profileHeader = document.getElementById('profileHeaderDrag');
  profileHeader.addEventListener(
    'touchstart',
    function (event) {
      touchstartX = event.changedTouches[0].screenX;
    },
    false
  );

  profileHeader.addEventListener(
    'touchend',
    function (event) {
      touchendX = event.changedTouches[0].screenX;
      profileHandleSwipe();
    },
    false
  );
}

function selectProfileView() {
  let currentUser = getCurrentUser();
  switch (model.app.subPage) {
    case 'bio':
      return `<div class="bioContainer" style="background-image: url(${
        currentUser.userBioBackground
      })">${drawBio()}</div> `;
    case 'reviews':
      return `<div class="reviewContainer">${drawReviews()}</div>`;
    case 'eventsCreated':
      return `<div class='createdEventsContainer'>${drawCreatedEvents()}</div>`;
  }
}

function drawBio() {
  let currentUser = getCurrentUser();
  let bioHTML = '';
  bioHTML = /*HTML*/ `
      <span class="profileDesc">${currentUser.userDescription}</span>
      <div class="profileTagContainer">
        ${drawUserTags()}
      </div>
  `;
  return bioHTML;
}

function drawUserTags() {
  let currentUser = getCurrentUser();
  let userTagsHTML = '';
  for (let i = 0; i < currentUser.userTags.length; i++) {
    userTagsHTML += `<div class="profileTag" id="${i}">${currentUser.userTags[i]}</div>`;
  }
  return userTagsHTML;
}

function drawProfile() {
  let currentUser = getCurrentUser();
  let profileHTML = '';
  profileHTML = /*HTML*/ `
  <div class="icon">${settingsIcon}</div>
  <img src="${currentUser.userProfileImg}">
  <div class="profileNameLoc">
    <span class="profileUsername">${currentUser.userName}</span>
    <span class="profileLoc">${currentUser.userLocation}</span>
  </div>
  <div class="dotContainer">
    ${drawDots()}
  </div>
  <div class="profileStatsContainer">

    <div class="profilePoeng">
      ${currentUser.userPoints}
      <span style="color: #6B6B6B;">Poeng</span>
    </div>

    <div class="laget">
      ${currentUser.userCreatedEventsCounter}
      <span style="color: #6B6B6B;">Økter laget</span>
    </div>

    <div class="deltatt">
      ${currentUser.userAttendedEventsCounter}
      <span style="color: #6B6B6B;">Økter deltatt</span>
    </div>

  </div>
  `;
  return profileHTML;
}

function drawDots() {
  switch (model.app.subPage) {
    case 'bio':
      return `<span class="dotInactive">.</span>
      <span class="dotActive">.</span>
      <span class="dotInactive">.</span>`;

    case 'reviews':
      return `<span class="dotActive">.</span>
      <span class="dotInactive">.</span>
      <span class="dotInactive">.</span>`;

    case 'eventsCreated':
      return `<span class="dotInactive">.</span>
      <span class="dotInactive">.</span>
      <span class="dotActive">.</span>`;
  }
}

//View for profile reviews
function drawReviews() {
  let currentUser = getCurrentUser();
  let reviewsHTML = '';
  for (let i = 0; i < currentUser.userReviews.length; i++) {
    reviewsHTML += /*HTML*/ `
    <div class="reviewSmallContainer">
    <img class="reviewPic" src="${getSubmitter(i).userProfileImg}">
    <div class="reviewName">${currentUser.userReviews[i].reviewSubmitter}</div>
    <div class="reviewText"><div class="reviewTextTxt">${
      currentUser.userReviews[i].reviewDescription
    }</div></div>
    <div class="reviewRating">${handleReviewStars(
      currentUser.userReviews[i].reviewScore
    )}</div>
    </div>
    `;
  }
  return reviewsHTML;
}

function handleReviewStars(count) {
  return starsIcon.repeat(count);
}

//View for profile events created
function drawCreatedEvents() {
  //filter
  let filteredEvents = model.data.events.filter(
    (e) => e.eventOwnerId === model.app.state.selectedUser
  );

  // let filteredEvents = model.data.events.find(
  //   (event) => event.eventOwnerId === model.app.state.selectedUser
  // );
  // console.log(filteredEvents[0].eventId);
  let eventHTML = '';
  for (let i = 0; i < filteredEvents.length; i++) {
    const isCardOpen = model.app.state.selectedCard === i;
    console.log(filteredEvents[i]);
    console.log(filteredEvents[i].eventId);
    eventHTML += `<div>${
      isCardOpen
        ? // Open Card
          `
        <div class="eventCardOpen"  id="#${filteredEvents[i].eventId}">
          <div class="intensityBar" style="background-color: ${setIntensityBar(
            1
          )};" ></div>
              <div class="eventImgContainer">
                <img class="eventImgBg" src="${
                  filteredEvents[i].eventImgOpen
                }" alt="Event image">
            </div>
            <div class="participantContainer">
              <div>Påmeldte</div>
              <div class="participantImgContainer">
                ${showParticipants(filteredEvents[i].eventId)}
              </div>
              <div class="intensityContainer">
              ${setIntensityIcon(1)}
                <div>intensitet</div>
              </div>
              <button class="eventSignUpBtn">Meld på</button>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${filteredEvents[i].eventName}</div>
              <div class="eventLocation">${
                filteredEvents[i].eventLocation
              }</div>
              <div class="eventCategoryContainer">
                <div class="eventSubCategory">${
                  filteredEvents[i].eventSubCategory
                }</div>
                ${setEventCategory(filteredEvents[i].eventId)}
              </div>
              <div class="eventDescContainer">
                <div class="eventDescTitle">${
                  filteredEvents[i].eventDescTitle
                }</div>
                <div class="eventDescription">${
                  filteredEvents[i].eventDescription
                }</div>
              </div>

              <div class="eventDateTimeOpen">
                <div class="eventTime">${filteredEvents[i].eventTime}</div>
                <div class="eventDate">${filteredEvents[i].eventDate}</div>
              </div>
            </div>
            <div onclick="openCard(${
              filteredEvents[i].eventId
            })" class="showLess">Vis mindre </br> ︿</div>

          </div>
        `
        : //Closed Card
          `
        <div class="eventCard"  id="#${filteredEvents[i].eventId}">
          <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
            1
          )};" ></div>
            <div class="eventImgContainer">
              <img class="eventImgBg" src="${
                filteredEvents[i].eventImg
              }" alt="Event image">
          </div>
          <div class="eventInfoContainer">
            <div class="eventTitle">${filteredEvents[i].eventName}</div>
            <div class="eventDateTime">
              <div class="eventTime">${filteredEvents[i].eventTime}</div>
              <div class="eventDate">${filteredEvents[i].eventDate}</div>
            </div>
            <div class="eventLocation">${filteredEvents[i].eventLocation}</div>
          </div>
          <div class="eventCategoryContainerClosed">
              <div class="eventSubCategory">${
                filteredEvents[i].eventSubCategory
              }</div>
              ${setEventCategory(filteredEvents[i].eventId)}
            </div>
            <div class="intensityContainerClosed">
              ${setIntensityIcon(filteredEvents[i].eventId)}
              <div>intensitet</div>
            </div>
          <div href="#${filteredEvents[i].eventId}" onclick="openCard(${
            filteredEvents[i].eventId
          })" class="showMore">Vis mer</br> ﹀</div>
        </div>
      `
    }</div>`;
  }
  return eventHTML;
}

// bio
// reviews
// eventsCreated
