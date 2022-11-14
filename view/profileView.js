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
    (event) => event.eventOwnerId === model.app.state.selectedUser
  );

  let eventHTML = '';
  for (let i = 0; i < filteredEvents.length; i++) {
    const isCardOpen = model.app.state.selectedCard === i;
    eventHTML += `<div>${
      isCardOpen
        ? // Open Card
          `
        <div class="eventCardOpen"  id="#${i}">
          <div class="intensityBar" style="background-color: ${setIntensityBar(
            i
          )};" ></div>
              <div class="eventImgContainer">
                <img class="eventImgBg" src="${
                  model.data.events[i].eventImgOpen
                }" alt="Event image">
            </div>
            <div class="participantContainer">
              <div>Påmeldte</div>
              <div class="participantImgContainer">
                ${showParticipants(i)}
              </div>
              <div class="intensityContainer">
              ${setIntensityIcon(i)}
                <div>intensitet</div>
              </div>
              <button class="eventSignUpBtn">Meld på</button>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${model.data.events[i].eventName}</div>
              <div class="eventLocation">${
                model.data.events[i].eventLocation
              }</div>
              <div class="eventCategoryContainer">
                <div class="eventSubCategory">${
                  model.data.events[i].eventSubCategory
                }</div>
                ${setEventCategory(i)}
              </div>
              <div class="eventDescContainer">
                <div class="eventDescTitle">${
                  model.data.events[i].eventDescTitle
                }</div>
                <div class="eventDescription">${
                  model.data.events[i].eventDescription
                }</div>
              </div>

              <div class="eventDateTimeOpen">
                <div class="eventTime">${model.data.events[i].eventTime}</div>
                <div class="eventDate">${model.data.events[i].eventDate}</div>
              </div>
            </div>
            <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

          </div>
        `
        : //Closed Card
          `
        <div class="eventCard"  id="#${i}">
          <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
            i
          )};" ></div>
            <div class="eventImgContainer">
              <img class="eventImgBg" src="${
                model.data.events[i].eventImg
              }" alt="Event image">
          </div>
          <div class="eventInfoContainer">
            <div class="eventTitle">${model.data.events[i].eventName}</div>
            <div class="eventDateTime">
              <div class="eventTime">${model.data.events[i].eventTime}</div>
              <div class="eventDate">${model.data.events[i].eventDate}</div>
            </div>
            <div class="eventLocation">${
              model.data.events[i].eventLocation
            }</div>
          </div>
          <div class="eventCategoryContainerClosed">
              <div class="eventSubCategory">${
                model.data.events[i].eventSubCategory
              }</div>
              ${setEventCategory(i)}
            </div>
            <div class="intensityContainerClosed">
              ${setIntensityIcon(i)}
              <div>intensitet</div>
            </div>
          <div href="#${i}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
        </div>
      `
    }</div>`;
  }
  return eventHTML;
}

// bio
// reviews
// eventsCreated
