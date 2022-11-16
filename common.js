//View for profile bio
// function setCurrentUser() {
//   let selectedUser = model.app.state.selectedUser;
//   let currentUser = model.data.users.filter((user) => {
//     return user.userName === selectedUser;
//   });

//   return currentUser;
// }
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

function getCurrentUser() {
	let selectedUser = model.app.state.selectedUser;
	return model.data.users.find((user) => user.userName === selectedUser);
}

function getSubmitter(i) {
	let submitter = getCurrentUser().userReviews[i].reviewSubmitter;
	return model.data.users.find((user) => user.userName === submitter);
}

// function getUpcomingEvents() {
//   const filter = model.data.events.filter(
//     (event) =>
//       event.eventParticipants[i].userName === model.app.state.activeUser
//   );
//   return filter.filter(participant => participant)
// }

// function getUpcomingEvents() {
//   const participant = model.data.eventParticipants.filter(
//     (user) => user.userName === model.app.state.activeUser
//   );

//   let filter = [];
//   //returnere eventet som har samme eventId som participant
//   for (let i = 0; i < participant.length; i++) {
//     filter = model.data.events.filter(
//       (event) => event.eventId === participant[i].eventId
//     );
//   }
//   return filter;
// }

//Alternativ Løsning
// function getCurrentUserField(fieldName) {
//   let selectedUser = model.app.state.selectedUser;
//   let userObj = model.data.users.find((user) => user.userName === selectedUser);
//   return userObj[fieldName];
// }

// function drawCards({
// 	eventId,
// 	imgOpen,
// 	eventName,
// 	eventLocation,
// 	eventSubCategory,
// 	eventDescTitle,
// 	eventDescription,
// 	eventTime,
// 	eventDate,
// }) {
// 	let cardsHtml = "";
// 	for (let i = 0; i < model.data.events.length; i++) {
// 		const isCardOpen = model.app.state.selectedCard === i;
// 		cardsHtml += `<div>${
// 			isCardOpen
// 				? // Open Card
// 				  `
//         <div class="eventCardOpen"  id="#${eventId}">
//           <div class="intensityBar" style="background-color: ${setIntensityBar(
// 						eventId
// 					)};" ></div>
//               <div class="eventImgContainer">
//                 <img class="eventImgBg" src="${imgOpen}" alt="Event image">
//             </div>
//             <div class="participantContainer">
//               <div>Påmeldte</div>
//               <div class="participantImgContainer">
//                 ${showParticipants(eventId)}
//               </div>
//               <div class="intensityContainer">
//               ${setIntensityIcon(eventId)}
//                 <div>intensitet</div>
//               </div>
//               <button class="eventSignUpBtn">Meld på</button>
//             </div>
//             <div class="eventInfoContainer">
//               <div class="eventTitle">${eventName}</div>
//               <div class="eventLocation">${eventLocation}</div>
//               <div class="eventCategoryContainer">
//                 <div class="eventSubCategory">${eventSubCategory}</div>
//                 ${setEventCategory(eventId)}
//               </div>
//               <div class="eventDescContainer">
//                 <div class="eventDescTitle">${eventDescTitle}</div>
//                 <div class="eventDescription">${eventDescription}</div>
//               </div>

//               <div class="eventDateTimeOpen">
//                 <div class="eventTime">${eventTime}</div>
//                 <div class="eventDate">${eventDate}</div>
//               </div>
//             </div>
//             <div onclick="openCard(${eventId})" class="showLess">Vis mindre </br> ︿</div>

//           </div>
//         `
// 				: //Closed Card
// 				  `
//         <div class="eventCard"  id="#${eventId}">
//           <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
// 						eventId
// 					)};" ></div>
//             <div class="eventImgContainer">
//               <img class="eventImgBg" src="${eventImg}" alt="Event image">
//           </div>
//           <div class="eventInfoContainer">
//             <div class="eventTitle">${eventName}</div>
//             <div class="eventDateTime">
//               <div class="eventTime">${eventTime}</div>
//               <div class="eventDate">${eventDate}</div>
//             </div>
//             <div class="eventLocation">${eventLocation}</div>
//           </div>
//           <div class="eventCategoryContainerClosed">
//               <div class="eventSubCategory">${eventSubCategory}</div>
//               ${setEventCategory(eventId)}
//             </div>
//             <div class="intensityContainerClosed">
//               ${setIntensityIcon(eventId)}
//               <div>intensitet</div>
//             </div>
//           <div href="#${eventId}" onclick="openCard(${eventId})" class="showMore">Vis mer</br> ﹀</div>
//         </div>
//       `
// 		}</div>`;
// 	}
// 	return cardsHtml;
// }
