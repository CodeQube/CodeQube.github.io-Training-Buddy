function handleCreateNewEvent() {
	let event = model.inputs;
	model.data.events.push({
		eventId: model.data.events.length + 1,
		eventOwnerId: model.app.state.activeUser,
		eventName: event.newEventName,
		eventLocation: event.newEventLocation,
		eventIcon: `${event.newEventCategory}Icon`, // This gets its value from the category array by a controller function this.categories[0].icon
		eventImg: model.inputs.newEventImg, //  This gets its value from the category array by a controller function this.categories[0].bgImg
		eventImgOpen: model.inputs.newEventImgOpen, //  This gets its value from the category array by a controller function this.categories[0].bgImg
		eventCategory: model.inputs.newEventCategory,
		eventSubCategory: event.newEventSubCategory,
		eventIntensity: event.newEventIntensity,
		eventDate: model.inputs.newEventDate,
		eventTime: model.inputs.newEventTime,
		eventDescTitle: event.newEventDescTitle,
		eventDescription: event.newEventDescription,
	});
	model.app.activePage = "home";
	mainView();
}

function checkNewEventCategory() {
	switch (model.inputs.newEventSubCategory) {
		case "Langdistanseløp":
		case "Friløp":
		case "Halvmaraton":
			model.inputs.newEventCategory = "Løping";
			model.inputs.newEventImg = `./images/bg/løping.jpg`;
			model.inputs.newEventImgOpen = `./images/bg/løpingOpen.jpg`;
			break;

		case "Rygg":
		case "Ben":
		case "Armer":
		case "Bryst":
			model.inputs.newEventCategory = "Styrke";
			model.inputs.newEventImg = `./images/bg/styrke.jpg`;
			model.inputs.newEventImgOpen = `./images/bg/styrkeOpen.jpg`;
			break;

		case "Spinning":
		case "Downhill":
		case "Terreng":
		case "Vei":
			model.inputs.newEventCategory = "Sykling";
			model.inputs.newEventImg = `./images/bg/sykling.jpg`;
			model.inputs.newEventImgOpen = `./images/bg/syklingOpen.jpg`;
			break;

		case "Butterfly":
		case "Synkronsvømming":
			model.inputs.newEventCategory = "Svømming";
			model.inputs.newEventImg = `./images/bg/svømming.jpg`;
			model.inputs.newEventImgOpen = `./images/bg/svømmingOpen.jpg`;
			break;
	}
}

function handleNewEventIntensity(action) {
	if (
		model.inputs.newEventIntensity <= 4 ||
		model.inputs.newEventIntensity >= 1
	) {
		if (action === "minus") {
			model.inputs.newEventIntensity--;
		} else {
			model.inputs.newEventIntensity++;
		}
	} else {
		cancel;
	}
	mainView();
}

function handleNewEventAttendees(action) {
	if (
		model.inputs.newEventMaxAttendees <= 4 ||
		model.inputs.newEventMaxAttendees >= 1
	) {
		if (action === "minus") {
			model.inputs.newEventMaxAttendees--;
		} else {
			model.inputs.newEventMaxAttendees++;
		}
	} else {
		cancel;
	}
	mainView();
}

function formatDateTime(value) {
	let date = value.split("T").splice(0, 1).toString();
	let time = value.split("T").splice(1, 1).toString();
	(model.inputs.newEventDate = date), (model.inputs.newEventTime = time);
}

async function setLocation(long, lat) {
	let api = `https://api.maptiler.com/geocoding/${long},${lat}.json?key=d8oK0KJnl1dSUcmckomp`;
	fetch(api)
		.then((response) => response.json())
		.then(
			(json) =>
				(model.inputs.newEventLocation =
					json.features[2].place_name.split(",")[0] +
					"," +
					json.features[2].place_name.split(",")[1])
		);
	mainView();
}
