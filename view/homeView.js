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

function drawCards() {
  let cardsHtml = '';
  for (let i = 0; i < model.data.events.length; i++) {
    const isCardOpen = model.app.state.selectedCard === i;
    cardsHtml += `<div>${
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
              <button class="eventSignUpBtn" onclick="attendEvent(${
                model.data.events[i].eventId
              }
							)">Meld på</button>
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
  return cardsHtml;
}

//For you view
