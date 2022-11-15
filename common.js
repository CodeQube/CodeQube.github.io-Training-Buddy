//View for profile bio
// function setCurrentUser() {
//   let selectedUser = model.app.state.selectedUser;
//   let currentUser = model.data.users.filter((user) => {
//     return user.userName === selectedUser;
//   });

//   return currentUser;
// }

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
//   imgOpen,
//   eventName,
//   eventLocation,
//   eventSubCategory,
//   eventDescTitle,
//   eventDescription,
//   eventTime,
//   eventDate
// }) {
// 	let cardsHtml = "";
// 	for (let i = 0; i < model.data.events.length; i++) {
// 		const isCardOpen = model.app.state.selectedCard === i;
// 		cardsHtml += `<div>${
// 			isCardOpen
// 				? // Open Card
// 				  `
//         <div class="eventCardOpen"  id="#${i}">
//           <div class="intensityBar" style="background-color: ${setIntensityBar(
// 						i
// 					)};" ></div>
//               <div class="eventImgContainer">
//                 <img class="eventImgBg" src="${
// 									imgOpen
// 								}" alt="Event image">
//             </div>
//             <div class="participantContainer">
//               <div>Påmeldte</div>
//               <div class="participantImgContainer">
//                 ${showParticipants(i)}
//               </div>
//               <div class="intensityContainer">
//               ${setIntensityIcon(i)}
//                 <div>intensitet</div>
//               </div>
//               <button class="eventSignUpBtn">Meld på</button>
//             </div>
//             <div class="eventInfoContainer">
//               <div class="eventTitle">${eventName}</div>
//               <div class="eventLocation">${
// 								eventLocation
// 							}</div>
//               <div class="eventCategoryContainer">
//                 <div class="eventSubCategory">${
// 									eventSubCategory
// 								}</div>
//                 ${setEventCategory(i)}
//               </div>
//               <div class="eventDescContainer">
//                 <div class="eventDescTitle">${
// 									eventDescTitle
// 								}</div>
//                 <div class="eventDescription">${
// 									eventDescription
// 								}</div>
//               </div>

//               <div class="eventDateTimeOpen">
//                 <div class="eventTime">${eventTime}</div>
//                 <div class="eventDate">${eventDate}</div>
//               </div>
//             </div>
//             <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

//           </div>
//         `
// 				: //Closed Card
// 				  `
//         <div class="eventCard"  id="#${i}">
//           <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
// 						i
// 					)};" ></div>
//             <div class="eventImgContainer">
//               <img class="eventImgBg" src="${
// 								eventImg
// 							}" alt="Event image">
//           </div>
//           <div class="eventInfoContainer">
//             <div class="eventTitle">${eventName}</div>
//             <div class="eventDateTime">
//               <div class="eventTime">${eventTime}</div>
//               <div class="eventDate">${eventDate}</div>
//             </div>
//             <div class="eventLocation">${
// 							eventLocation
// 						}</div>
//           </div>
//           <div class="eventCategoryContainerClosed">
//               <div class="eventSubCategory">${
// 								eventSubCategory
// 							}</div>
//               ${setEventCategory(i)}
//             </div>
//             <div class="intensityContainerClosed">
//               ${setIntensityIcon(i)}
//               <div>intensitet</div>
//             </div>
//           <div href="#${i}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
//         </div>
//       `
// 		}</div>`;
// 	}
// 	return cardsHtml;
// }
