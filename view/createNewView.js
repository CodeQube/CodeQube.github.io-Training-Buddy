//View for creating a new event
function createNewView() {
  document.getElementById('app').innerHTML = `
      <div class="createNewContainer">${drawNewEvent()}</div>
      ${drawFooter()}
      `;
}

function drawNewEvent() {
  let event = model.inputs;
  let newEventHTML = /*HTML*/ `
  <input class="eventTitleInput" type="text" value="${
    model.inputs.newEventName
  }" placeholder="Skriv inn en kort tittel" oninput="
		model.inputs.newEventName
	 = this.value">
  <div class="newEventLocationInput">
  <span>Sted</span>
  <input value="${
    model.inputs.newEventLocation
  }" class="newEventLocationInputField" onclick="navigator.geolocation.getCurrentPosition(successCallback, errorCallback)" type="text" placeholder="Hvor skal økten være?">
  </div>
  
  <div class="eventCategoryInputContainer">
    <label for="categories">Kategori</label>
    <select onchange="checkNewEventCategory()" name="categories" form="categoryform" class="newEventCategorySelect" oninput="model.inputs.newEventSubCategory =
		this.value">
        <Option selected></Option>
        ${drawCategoriesList()}
    </select>
  </div>

  <input class="eventDateInput" value="${
    model.inputs.newEventTimeDate
  }" type="datetime-local" onchange="model.inputs.newEventTimeDate = this.value; formatDateTime(this.value)">

  <div class="newEventIntensityContainer">
    <div  onclick="${
      model.inputs.newEventIntensity >= 2
        ? `handleNewEventIntensity('minus')`
        : ''
    }">${minusIcon}</div>
    ${changeIntensity()}
    <div  onclick="${
      model.inputs.newEventIntensity <= 3
        ? `handleNewEventIntensity('plus')`
        : ''
    }">${plusIcon}</div>
  </div>

  <div class="newEventDescriptionContainer">
    <input id="newEventDescTitle" value="${
      model.inputs.newEventDescTitle
    }" type="text" placeholder="Legg til en beskrivende emnetittel" oninput="
		model.inputs.newEventDescTitle
	 = this.value">
    <input
    type="text" id="newEventLongDesc" name="eventDescription" value="${
      model.inputs.newEventDescription
    }" placeholder="Beskriv økten din her, gjerne si litt om hvor dere skal møtes og hva økten går ut på..." style="height:200px" oninput="
		model.inputs.newEventDescription
	 = this.value"></input>
  </div>
  <div class="deltagereContainer">
    <span class="deltagereText">Deltagere</span>
    <div class="deltagereBtnMinus" onclick="handleNewEventAttendees('minus')">${minusIcon}</div>
    ${profileButton}
    <div class="deltagereBtnPlus" onclick="handleNewEventAttendees('plus')">${plusIcon}</div>
    <div class="newEventMaxAttendees">${event.newEventMaxAttendees}</div>
  </div>
  <button class="makeNewEventBtn" onclick="handleCreateNewEvent()">Opprett</button>
  `;
  return newEventHTML;
}

function drawCategoriesList() {
  let html = '';
  let selected = '';
  for (let i = 0; i < model.data.categories.length; i++) {
    for (let j = 0; j < model.data.categories[i].subCategories.length; j++) {
      html += `<Option ${
        model.inputs.newEventSubCategory ===
        model.data.categories[i].subCategories[j]
          ? 'selected'
          : ''
      } onclick="selected=this.value" value="${
        model.data.categories[i].subCategories[j]
      }">${model.data.categories[i].subCategories[j]}</Option>`;
    }
  }
  return html;
}

const successCallback = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  setLocation(long, lat);
};

const errorCallback = (error) => {
  console.log(error);
};

function changeIntensity() {
  let intensityIconSVG;
  switch (model.inputs.newEventIntensity) {
    case 1:
      intensityIconSVG = `<svg width="34" height="34" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="#38FF17"/>
      </svg>`;
      break;
    case 2:
      intensityIconSVG = `<svg width="34" height="34" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="#FFC700"/>
      </svg>`;
      break;
    case 3:
      intensityIconSVG = `<svg width="34" height="34" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="#F24E1E"/>
      </svg>`;
      break;
    case 4:
      intensityIconSVG = `<svg width="34" height="34" viewBox="0 0 25 24" fill="none" xmlns="http:www.w3.org/2000/svg">
      <path d="M19.764 24V0H24.5304V24H19.764ZM13.4089 6H18.1752V24H13.4089V6ZM7.05375 12H11.8201V24H7.05375V12ZM0.698608 18H5.46496V24H0.698608V18Z" fill="#FF0000"/>
      </svg>`;
      break;
  }
  return intensityIconSVG;
}
