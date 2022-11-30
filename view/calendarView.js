function calendarView() {
	document.getElementById("app").innerHTML = `
          ${
						model.app.subPage != "review"
							? `
              <div class='calendarHeaderContainer'>${drawCalendarHeader()}</div>
              <div class="calendarContainer">${selectCalendarView()}</div>
              `
							: `<div class="calendarContainerReview">${selectCalendarView()}</div>`
					}
          
          ${drawFooter()}
          `;
}

function selectCalendarView() {
	switch (model.app.subPage) {
		case "active":
			return calendarActiveView();
		case "history":
			return calendarHistoryView();
		case "upcoming":
			return calendarUpcomingView();
		case "review":
			return giveReviewView();
	}
}

function drawCalendarHeader() {
	return `
  <div class="calendarHeader">
    	<div>${filterIcon}</div>
      <span onclick="setCalendarSubPage('upcoming')" style="opacity: ${
				model.app.subPage === "upcoming" ? "100%" : "50%"
			}">Kommende</span>
			<span onclick="setCalendarSubPage('history')" style="opacity: ${
				model.app.subPage === "history" ? "100%" : "50%"
			}">Historikk</span>
      <span onclick="setCalendarSubPage('active')" style="opacity: ${
				model.app.subPage === "active" ? "100%" : "50%"
			}">Aktive</span>
      </div>
    `;
}

//View for upcomming events
// function calendarUpcomingView() {
//   //Filtrere eventer som du har meldt deg på etter dato og tid
//   for (let i = 0; i < filter.length; i++) {

//   }
//   // console.log(filter);
// }

function calendarUpcomingView() {
	let events = model.data.eventParticipants
		.filter((ep) => ep.userName === model.app.state.activeUser)
		.map((ep) => model.data.events.find((e) => e.eventId === ep.eventId));
	let cardsHtml = "";
	for (let i = 0; i < events.length; i++) {
		const event = events[i];

		const isCardOpen = model.app.state.selectedCard === event.eventId;
		cardsHtml += `<div>${
			isCardOpen
				? // Open Card
				  `
        <div class="eventCardOpen" id="#${event.eventId}">
          <div class="intensityBar" style="background-color: ${setIntensityBar(
						event.eventId
					)};" ></div>
            <div class="eventImgContainer">
              <div class="eventImgBgOpen" style="background-image:
              linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${model.data.events[i].eventImgOpen})"></div>
            </div>
            <div class="participantContainer">
              <div>Påmeldte</div>
              <div class="participantImgContainer">
                ${showParticipants(event.eventId)}
              </div>
              <div class="intensityContainer">
              ${setIntensityIcon(event.eventId)}
                <div>intensitet</div>
              </div>
              <button class="eventSignUpBtn" onclick="removeFromEvent(${
								event.eventId
							})">Meld av</button>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${event.eventName}</div>
              <div class="eventLocation">${event.eventLocation}</div>
              <div class="eventCategoryContainer">
                <div class="eventSubCategory">${event.eventSubCategory}</div>
                ${setEventCategory(event.eventId)}
              </div>
              <div class="eventDescContainer">
                <div class="eventDescTitle">${event.eventDescTitle}</div>
                <div class="eventDescription">${event.eventDescription}</div>
              </div>

              <div class="eventDateTimeOpen">
                <div class="eventTime">${event.eventTime}</div>
                <div class="eventDate">${event.eventDate}</div>
              </div>
            </div>
            <div onclick="openCard(${
							event.eventId
						})" class="showLess">Vis mindre </br> ︿</div>

          </div>
        `
				: //Closed Card
				  `
        <div class="eventCard"  id="#${event.eventId}">
          <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
						event.eventId
					)};" ></div>
          <div class="eventImgContainer">
            <div class="eventImgBgClosed" style="background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url(${model.data.events[i].eventImg})"></div>
          </div>
          <div class="eventInfoContainer">
            <div class="eventTitle">${event.eventName}</div>
            <div class="eventDateTime">
              <div class="eventTime">${event.eventTime}</div>
              <div class="eventDate">${event.eventDate}</div>
            </div>
            <div class="eventLocation">${event.eventLocation}</div>
          </div>
          <div class="eventCategoryContainerClosed">
              <div class="eventSubCategory">${event.eventSubCategory}</div>
              ${setEventCategory(event.eventId)}
            </div>
            <div class="intensityContainerClosed">
              ${setIntensityIcon(event.eventId)}
              <div>intensitet</div>
            </div>
          <div href="#${event.eventId}" onclick="openCard(${
						event.eventId
				  })" class="showMore">Vis mer</br> ﹀</div>
        </div>
      `
		}</div>`;
	}
	return cardsHtml;
}

// let filteredEvents = model.data.events.filter(
//   (event) => event.eventOwnerId === model.app.state.selectedUser
// );

//View for history events
function calendarHistoryView() {
	//Filtrere eventer som har skjedd hvor du har blitt bekreftet
	//når skaperen av et event trykker at du er bekreftet legges navnet ditt inn i et array i det respektive eventet
	let events = model.data.eventParticipants
		.filter(
			(ep) =>
				ep.userName === model.app.state.activeUser && ep.isConfirmed == true
		)
		.map((ep) => model.data.events.find((e) => e.eventId === ep.eventId));
	let participant = model.data.eventParticipants.find(
		(ep) => ep.userName === model.app.state.activeUser
	);

	let cardsHtml = "";
	for (let i = 0; i < events.length; i++) {
		const event = events[i];

		const isCardOpen = model.app.state.selectedCard === event.eventId;
		cardsHtml += `<div>${
			isCardOpen
				? // Open Card
				  `
          <div class="eventCardOpen" id="#${event.eventId}">
            <div class="intensityBar" style="background-color: ${setIntensityBar(
							event.eventId
						)};" ></div>
            <div class="eventImgContainer">
            <div class="eventImgBgOpen" style="background-image:
            linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url(${model.data.events[i].eventImgOpen})"></div>
            </div>
              <div class="participantContainer">
                <div class="intensityContainerFixed" style="margin-left: 35px">
                ${setIntensityIcon(event.eventId)}
                  <div>intensitet</div>
                </div>
                ${
									participant.hasReviewed === true
										? `<div class="tilbakemelding">Du har allerede gitt tilbakemelding</div>`
										: `<button class="giveReviewBtn" onclick="setActiveReviewEvent(${event.eventId})">Gi en tilbakemelding</button>`
								}
              </div>
              <div class="eventInfoContainer">
                <div class="eventTitle">${event.eventName}</div>
                <div class="eventLocation">${event.eventLocation}</div>
                <div class="eventCategoryContainer">
                  <div class="eventSubCategory">${event.eventSubCategory}</div>
                  ${setEventCategory(event.eventId)}
                </div>
  
                <div class="eventDateTimeOpen">
                  <div class="eventTime">${event.eventTime}</div>
                  <div class="eventDate">${event.eventDate}</div>
                </div>
              </div>
              <div onclick="openCard(${
								event.eventId
							})" class="showLess">Vis mindre </br> ︿</div>
  
            </div>
          `
				: //Closed Card
				  `
          <div class="eventCard"  id="#${event.eventId}">
            <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
							event.eventId
						)};" ></div>
            <div class="eventImgContainer">
              <div class="eventImgBgClosed" style="background-image:
              linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${model.data.events[i].eventImg})"></div>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${event.eventName}</div>
              <div class="eventDateTime">
                <div class="eventTime">${event.eventTime}</div>
                <div class="eventDate">${event.eventDate}</div>
              </div>
              <div class="eventLocation">${event.eventLocation}</div>
            </div>
            <div class="eventCategoryContainerClosed">
                <div class="eventSubCategory">${event.eventSubCategory}</div>
                ${setEventCategory(event.eventId)}
              </div>
              <div class="intensityContainerClosed">
                ${setIntensityIcon(event.eventId)}
                <div>intensitet</div>
              </div>
            <div href="#${event.eventId}" onclick="openCard(${
						event.eventId
				  })" class="showMore">Vis mer</br> ﹀</div>
          </div>
        `
		}</div>`;
	}
	return cardsHtml;
}

//View for active events
function calendarActiveView() {
	//filterere dine aktive økter som du har laget, kunne redigere og slette samt bekrefte påmeldte bruekere
	//filter
	let filteredEvents = model.data.events.filter(
		(e) =>
			e.eventOwnerId === model.app.state.selectedUser &&
			e.eventIsClosed == false
	);
	let eventHTML = "";
	for (let i = 0; i < filteredEvents.length; i++) {
		const isCardOpen = model.app.state.selectedCard === i;
		// console.log(filteredEvents[i]);
		// console.log(filteredEvents[i].eventId);
		eventHTML += `<div>${
			isCardOpen
				? // Open Card
				  `
      <div class="eventCardOpen"  id="#${filteredEvents[i].eventId}">
        <div class="intensityBar" style="background-color: ${setIntensityBar(
					filteredEvents[i].eventId
				)};" ></div>
        <div class="eventImgContainer">
          <div class="eventImgBgOpen" style="background-image:
          linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url(${filteredEvents[i].eventImgOpen})"></div>
        </div>

          <div class="participantContainer">
            <div class="participantImgContainerFixed">
              ${showActiveParticipants(filteredEvents[i].eventId)}
            </div>
            <button onclick="handleConfirmEvent(${i})" class="eventConfirmBtn">Bekreft</button>
            <div class="intensityContainer" style="margin-top: 60px">
            ${setIntensityIcon(filteredEvents[i].eventId)}
              <div>intensitet</div>
            </div>
            
          </div>
          <div class="eventInfoContainer">
            <div class="eventTitle">${filteredEvents[i].eventName}</div>
            <div class="eventLocation">${filteredEvents[i].eventLocation}</div>
            <div class="eventCategoryContainer">
              <div class="eventSubCategory">${
								filteredEvents[i].eventSubCategory
							}</div>
              ${setEventCategory(filteredEvents[i].eventId)}
            </div>
            

            <div class="eventDateTimeOpen">
              <div class="eventTime">${filteredEvents[i].eventTime}</div>
              <div class="eventDate">${filteredEvents[i].eventDate}</div>
            </div>
          </div>
          <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

        </div>
      `
				: //Closed Card
				  `
      <div class="eventCard"  id="#${filteredEvents[i].eventId}">
        <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
					filteredEvents[i].eventId
				)};" ></div>
        <div class="eventImgContainer">
          <div class="eventImgBgClosed" style="background-image:
          linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url(${filteredEvents[i].eventImg})"></div>
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
        <div href="#${
					filteredEvents[i].eventId
				}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
      </div>
    `
		}</div>`;
	}
	return eventHTML;
}

function giveReviewView() {
	//View for å gi en review
	let reviewEventId = model.app.state.activeReviewEvent;
	let reviewEvent = model.data.events.find((e) => e.eventId === reviewEventId);
	// console.log(reviewEvent);
	// let event = model.data.eventParticipants
	//   .filter(
	//     (ep) =>
	//       ep.userName === model.app.state.activeUser &&
	//       ep.isConfirmed == true &&
	//   )
	//   .map((ep) => model.data.events.find((e) => e.eventId === ep.eventId));

	let reviewHTML = `
    <div class="giveReviewHeader">
      <div class="giveReviewTitle">${reviewEvent.eventName}</div>
      <div class="giveReviewLocation">${reviewEvent.eventLocation}</div>
    </div>

    <div class="giveReviewContainer">
      <div class="giveReviewEventContainer">
        <div style="margin: 20px 0">
          <span class="giveReviewEventTitle">Hvor inspirert ble du av denne økten?</span>
          <div class="giveReviewEventStars" onclick="model.inputs.review.eventReview1 = 3">${handleGiveReviewStars1()}</div>
        </div>
        <div style="margin-bottom: 20px">
          <span class="giveReviewEventTitle">Hvor godt utbytte fikk du?</span>
          <div class="giveReviewEventStars" id="testContainer" onclick="model.inputs.review.eventReview2 = 3">${handleGiveReviewStars2()}</div>
        </div>
        <div style="margin-bottom: 20px; padding: 0 20px;">
          <span class="giveReviewEventTitle">Vil du gi en tilbakemelding til de andre deltagerene?</span>
        </div>
      </div>

      <div class="giveReviewParticipantsContainer">
        ${getReviewParticipants(reviewEventId)}
      </div>
    </div>

    <button class="giveReviewBtnConfirm" onclick="sendReview()">Bekreft</button>
  `;

	return reviewHTML;
}

function getReviewParticipants(eventId) {
	let reviewEvent = model.data.events.find((e) => e.eventId === eventId);
	let participants = model.data.eventParticipants
		.filter(
			(ep) =>
				ep.eventId === eventId &&
				ep.isConfirmed === true &&
				ep.userName !== model.app.state.activeUser
		)
		.map((ep) => model.data.users.find((u) => u.userName === ep.userName));

	// console.log(participants);
	let html = "";
	for (let i = 0; i < participants.length; i++) {
		html += `
      <div class="giveReviewParticipant">
        <div class="reviewSmallContainer">
          <img class="giveReviewPic" src="${participants[i].userProfileImg}">
          <div class="giveReviewUsername">${
						model.inputs.review.userReviews[i].userName
					}</div>
          <input type="text" class="giveReviewInput" oninput="model.inputs.review.userReviews[${i}].text=this.value" value="${
			model.inputs.review.userReviews[i].text != ""
				? model.inputs.review.userReviews[i].text
				: ""
		}" placeholder="Skriv en tilbakemelding her...">
          <div class="giveReviewRating">${handleGiveReviewStarsParticipants(
						i
					)}</div>
        </div>
      </div>
    `;
	}

	return html;
}
