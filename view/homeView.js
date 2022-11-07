// Main Home View For the app
function homeView() {
	let header = drawHeaderHome();
	let content = drawCards();
	let footer = drawFooter();
	document.getElementById("app").innerHTML = `
  ${drawHeaderHome()}
  <div class="contentContainer">${drawCards()}</div>
  ${drawFooter()}
  `;
}

function drawCards() {
	let cardsHtml = "";
	for (let i = 0; i < model.data.events.length; i++) {
		const isCardOpen = model.app.state.selectedCard === i;
		cardsHtml += `<div>${
			isCardOpen
				? // Open Card
				  `
        <div class="eventCardOpen">
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
        <div class="eventCard">
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
          <div onclick="openCard(${i})" class="showMore">Vis mer </br> ﹀</div>
        </div>
      `
		}</div>`;
	}
	return cardsHtml;
}

function setIntensityIcon(i) {
	let intensityColor = "";
	let intensityIcon = "";
	switch (model.data.events[i].eventIntensity) {
		case 1:
			intensityColor = "#38FF17";
			intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
			break;
		case 2:
			intensityColor = "#FFC700";
			intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
			break;
		case 3:
			intensityColor = "#F24E1E";
			intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
			break;
		case 4:
			intensityColor = "#FF0000";
			intensityIcon = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="${intensityColor}"/>
      </svg>`;
			break;
	}

	return intensityIcon;
}

function setIntensityBar(i) {
	let intensityColor = "";
	switch (model.data.events[i].eventIntensity) {
		case 1:
			intensityColor = "#38FF17";
			break;
		case 2:
			intensityColor = "#FFC700";
			break;
		case 3:
			intensityColor = "#F24E1E";
			break;
		case 4:
			intensityColor = "#FF0000";
			break;
	}
	return intensityColor;
}

function setEventCategory(i) {
	let eventCategory = "";
	switch (model.data.events[i].eventCategory) {
		case "Løping":
			eventCategory = løpingIcon;
			break;
		case "Styrke":
			eventCategory = styrkeIcon;
			break;
		case "Svømming":
			eventCategory = svømmingIcon;
			break;
		case "Sykling":
			eventCategory = syklingIcon;
			break;
	}
	return eventCategory;
}

function showParticipants(i) {
	//Draws the event participants
	let participants = "";
	model.data.events[i].eventParticipants.forEach(
		(participant) =>
			(participants += `<img src="${participant.userImg}" class="eventParticipants"></img>`)
	);
	return participants;
}

//For you view
