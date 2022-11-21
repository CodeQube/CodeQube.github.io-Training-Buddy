function drawCards() {
    let events = model.data.events;
    if(model.inputs.filters.name != null){
        events = events.filter(e=>e.name == model.inputs.filters.name);
    }
    if(model.inputs.filters.place != null){
        events = events.filter(e=>e.place == model.inputs.filters.place);
    }

  let cardsHtml = '';
  for (let event of events) {
    const i = model.data.events.findIndex(e=>e==event);
    const isCardOpen = model.app.state.selectedCard === i;
    cardsHtml += `
        <div>
        ${isCardOpen ? drawOpenCard(i) : drawClosedCard(i) }
        </div>
        `
  return cardsHtml;
}

function findEventIndex(event){
    for (let i = 0; i < model.events.length; i++) {
        if(model.events[i] == event)return i;
    }
    return -1;
}

function drawCardsF() {
    return model.data.events
    .map((e,i)=>`
        <div>
            ${model.app.state.selectedCard === i ? drawOpenCard(i) : drawClosedCard(i) }
        </div>
    `)
    .join('');
}


// function drawOpenCard(i) {
//     const event = model.data.events[i];
//   return; // Open Card
//   `
// <div class="eventCardOpen"  id="#${i}">
// <div class="intensityBar" style="background-color: ${setIntensityBar(
//     i
//   )};" ></div>
// <div class="eventImgContainer">
// <img class="eventImgBg" src="${
//     event.eventImgOpen
//   }" alt="Event image">
// </div>
// <div class="participantContainer">
// <div>Påmeldte</div>
// <div class="participantImgContainer">
// ${showParticipants(i)}
// </div>
// <div class="intensityContainer">
// ${setIntensityIcon(i)}
// <div>intensitet</div>
// </div>
// <button class="eventSignUpBtn" onclick="attendEvent(${
//     model.data.events[i].eventId
//   }
//            )">Meld på</button>
// </div>
// <div class="eventInfoContainer">
// <div class="eventTitle">${model.data.events[i].eventName}</div>
// <div class="eventLocation">${model.data.events[i].eventLocation}</div>
// <div class="eventCategoryContainer">
// <div class="eventSubCategory">${model.data.events[i].eventSubCategory}</div>
// ${setEventCategory(i)}
// </div>
// <div class="eventDescContainer">
// <div class="eventDescTitle">${model.data.events[i].eventDescTitle}</div>
// <div class="eventDescription">${model.data.events[i].eventDescription}</div>
// </div>

// <div class="eventDateTimeOpen">
// <div class="eventTime">${model.data.events[i].eventTime}</div>
// <div class="eventDate">${model.data.events[i].eventDate}</div>
// </div>
// </div>
// <div onclick="openCard(${i})" class="showLess">Vis mindre </br> ︿</div>

// </div>
// `;
// }

// function drawClosedCard(event) {
//     const event = model.data.events[i];
// return //Closed Card
// `
// <div class="eventCard"  id="#${i}">
// <div class="intensityBarClosed" style="background-color: ${setIntensityBar(
//   i
// )};" ></div>
//   <div class="eventImgContainer">
//     <img class="eventImgBg" src="${
//       event.eventImg
//     }" alt="Event image">
// </div>
// <div class="eventInfoContainer">
//   <div class="eventTitle">${model.data.events[i].eventName}</div>
//   <div class="eventDateTime">
//     <div class="eventTime">${model.data.events[i].eventTime}</div>
//     <div class="eventDate">${model.data.events[i].eventDate}</div>
//   </div>
//   <div class="eventLocation">${
//     model.data.events[i].eventLocation
//   }</div>
// </div>
// <div class="eventCategoryContainerClosed">
//     <div class="eventSubCategory">${
//       model.data.events[i].eventSubCategory
//     }</div>
//     ${setEventCategory(i)}
//   </div>
//   <div class="intensityContainerClosed">
//     ${setIntensityIcon(i)}
//     <div>intensitet</div>
//   </div>
// <div href="#${i}" onclick="openCard(${i})" class="showMore">Vis mer</br> ﹀</div>
// </div>
// </div>`;
// }
