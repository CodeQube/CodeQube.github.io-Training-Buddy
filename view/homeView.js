// Main Home View For the app
function homeView() {
  let header = drawHeaderHome();
  let content = drawCards();
  let footer = drawFooter();
  document.getElementById('app').innerHTML = `
  ${drawHeaderHome()}
  <div class="contentContainer">${drawCards()}</div>
  ${drawFooter()}
  `;
}

let arrToShow = [];
filterEvents();
function filterEvents() {
  switch (model.inputs.filters.category) {
    case '':
      arrToShow = model.data.events;
      break;
    case 'Løping':
      arrToShow = model.data.events.filter(
        (event) => event.eventCategory === 'Løping'
      );
      break;
    case 'Sykling':
      arrToShow = model.data.events.filter(
        (event) => event.eventCategory === 'Sykling'
      );
      break;
    case 'Styrke':
      arrToShow = model.data.events.filter(
        (event) => event.eventCategory === 'Styrke'
      );
      break;
    case 'Svømming':
      arrToShow = model.data.events.filter(
        (event) => event.eventCategory === 'Svømming'
      );
      break;
  }
  drawCards();
}

function drawCards() {
  // console.log(arrToShow);
  let cardsHtml = '';
  if (!arrToShow.length) {
    cardsHtml = `<div class="noResult">Det er ingen økter som passer det valgte filteret...</div>`;
  }
  for (let i = 0; i < arrToShow.length; i++) {
    const isCardOpen = model.app.state.selectedCard === i;
    cardsHtml += `<div>${
      isCardOpen
        ? // Open Card
          `
        <div class="eventCardOpen"  id="#${i}">
          <div class="intensityBar" style="background-color: ${setIntensityBar(
            arrToShow[i].eventId
          )};" ></div>
              <div class="eventImgContainer">
                <div class="eventImgBgOpen" style="background-image:
                linear-gradient(
                  rgba(0, 0, 0, 0.7),
                  rgba(0, 0, 0, 0.7)
                ),
                url(${arrToShow[i].eventImgOpen})"></div>
              </div>
            <div class="participantContainer">
              <div>Påmeldte</div>
              <div class="participantImgContainer">
                ${showParticipants(arrToShow[i].eventId)}
              </div>
              <div class="intensityContainer">
              ${setIntensityIcon(arrToShow[i].eventId)}
                <div>intensitet</div>
              </div>
              <button class="eventSignUpBtn" onclick="attendEvent(${
                arrToShow[i].eventId
              }
							)">Meld på</button>
            </div>
            <div class="eventInfoContainer">
              <div class="eventTitle">${arrToShow[i].eventName}</div>
              <div class="eventLocation">${arrToShow[i].eventLocation}</div>
              <div class="eventCategoryContainer">
                <div class="eventSubCategory">${
                  arrToShow[i].eventSubCategory
                }</div>
                ${setEventCategory(arrToShow[i].eventId)}
              </div>
              <div class="eventDescContainer">
                <div class="eventDescTitle">${arrToShow[i].eventDescTitle}</div>
                <div class="eventDescription">${
                  arrToShow[i].eventDescription
                }</div>
              </div>

              <div class="eventDateTimeOpen">
                <div class="eventTime">${arrToShow[i].eventTime}</div>
                <div class="eventDate">${arrToShow[i].eventDate}</div>
              </div>
            </div>
            <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

          </div>
        `
        : //Closed Card
          `
        <div class="eventCard"  id="#${i}">
          <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
            arrToShow[i].eventId
          )};" ></div>
            <div class="eventImgContainer">
              <div class="eventImgBgClosed" style="background-image:
              linear-gradient(
                rgba(0, 0, 0, 0.7),
                rgba(0, 0, 0, 0.7)
              ),
              url(${arrToShow[i].eventImg})"></div>
          </div>
          <div class="eventInfoContainer">
          <div class="titleLocation">
            <div class="eventTitle">${arrToShow[i].eventName}</div>
            <div class="eventLocation">${arrToShow[i].eventLocation}</div>
            </div>
            <div class="eventDateTime">
              <div class="eventTime">${arrToShow[i].eventTime}</div>
              <div class="eventDate">${arrToShow[i].eventDate}</div>
            </div>
            
          </div>
          <div class="eventCategoryContainerClosed">
              <div class="eventSubCategory">${
                arrToShow[i].eventSubCategory
              }</div>
              ${setEventCategory(arrToShow[i].eventId)}
            </div>
            <div class="intensityContainerClosed">
              ${setIntensityIcon(arrToShow[i].eventId)}
              <div>intensitet</div>
            </div>
          <div href="#${i}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
        </div>
      `
    }</div>`;
  }
  return cardsHtml;
}

// function drawCards() {
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
//                 <div class="eventImgBgOpen" style="background-image:
//                 linear-gradient(
//                   rgba(0, 0, 0, 0.7),
//                   rgba(0, 0, 0, 0.7)
//                 ),
//                 url(${model.data.events[i].eventImgOpen})"></div>
//               </div>

//             <div class="participantContainer">
//               <div>Påmeldte</div>
//               <div class="participantImgContainer">
//                 ${showParticipants(i)}
//               </div>
//               <div class="intensityContainer">
//               ${setIntensityIcon(i)}
//                 <div>intensitet</div>
//               </div>
//               <button class="eventSignUpBtn" onclick="attendEvent(${
// 								model.data.events[i].eventId
// 							}
// 							)">Meld på</button>
//             </div>
//             <div class="eventInfoContainer">
//               <div class="eventTitle">${model.data.events[i].eventName}</div>
//               <div class="eventLocation">${
// 								model.data.events[i].eventLocation
// 							}</div>
//               <div class="eventCategoryContainer">
//                 <div class="eventSubCategory">${
// 									model.data.events[i].eventSubCategory
// 								}</div>
//                 ${setEventCategory(i)}
//               </div>
//               <div class="eventDescContainer">
//                 <div class="eventDescTitle">${
// 									model.data.events[i].eventDescTitle
// 								}</div>
//                 <div class="eventDescription">${
// 									model.data.events[i].eventDescription
// 								}</div>
//               </div>

//               <div class="eventDateTimeOpen">
//                 <div class="eventTime">${model.data.events[i].eventTime}</div>
//                 <div class="eventDate">${model.data.events[i].eventDate}</div>
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
//               <div class="eventImgBgClosed" style="background-image:
//               linear-gradient(
//                 rgba(0, 0, 0, 0.7),
//                 rgba(0, 0, 0, 0.7)
//               ),
//               url(${model.data.events[i].eventImg})"></div>
//           </div>
//           <div class="eventInfoContainer">
//           <div class="titleLocation">
//             <div class="eventTitle">${model.data.events[i].eventName}</div>
//             <div class="eventLocation">${
// 							model.data.events[i].eventLocation
// 						}</div>
//             </div>
//             <div class="eventDateTime">
//               <div class="eventTime">${model.data.events[i].eventTime}</div>
//               <div class="eventDate">${model.data.events[i].eventDate}</div>
//             </div>

//           </div>
//           <div class="eventCategoryContainerClosed">
//               <div class="eventSubCategory">${
// 								model.data.events[i].eventSubCategory
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

//For you view
