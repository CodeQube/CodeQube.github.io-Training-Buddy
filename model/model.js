let model = {
	//app
	app: {
		//What page you are on
		activePage: "leaderboard",
		pages: [
			{
				name: "home",
				homePages: ["home", "forYou"],
			},
			{
				name: "leaderboard",
				leaderboardPages: ["leaderboard"],
			},
			{
				name: "createNewEvent",
				createnewPages: ["createNewEvent"],
			},
			{
				name: "calendar",
				calendarPages: ["active", "history", "upcoming"],
			},
			{
				name: "profile",
				profilePages: ["profile", "reviews", "eventsCreated"],
			},
		],

		//state
		state: {
			selectedCard: null, //Card that is selected by event ID, this expands the card
		},
	},
	//input
	inputs: {
		searchBar: "",
		//user controlled filter
		filters: {
			sortAscending: false,
			intensity: null,
			date: Date.now(),
			category: "",
			location: null, //Uses your location to pinpoint and show events in your area
		},
		attendEvent: false, //Button to attend events

		//create new event inputs
		newEventName: "",
		newEventDescTitle: "",
		newEventDescription: "",
		newEventLocation: "",
		newEventCategory: "",
		newEventSubCategory: "",
		newEventIntensity: "", //value between 1-4
		newEventMaxAttendees: 4, // value between 1-4. Creator counts as 1 of the attendees but does not have to be included in the maxAttendees
		newEventCreateBtn: "",
		newEventBgImg: "",
		newEventTimeDate: "",
		newEventTime: "",
		newEventDate: "",
		//reviews
		giveEventReview: {
			inspiredScore: 5,
			gainScore: 5,
		},
		giveAttendantReview: {
			reviewScore: 0,
			reviewText: "Skriv en setning her...",
		},
	},

	//data
	data: {
		categories: [
			{
				name: "Løping",
				bgImg: "./images/bg/løping.jpg",
				icon: "./images/icons/sko.png",
				subCategories: ["Langdistanseløp", "Friløp", "Halvmaraton"],
			},
			{
				name: "Styrke",
				bgImg: "./images/bg/vekter.jpg",
				icon: "./images/icons/bicep.png",
				subCategories: ["Rygg", "Ben", "Armer", "Bryst"],
			},
			{
				name: "Sykling",
				bgImg: "./images/bg/sykling.jpg",
				icon: "./images/icons/swimming.png",
				subCategories: ["Spinning", "Downhill", "Terreng", "Vei"],
			},
			{
				name: "Svømming",
				bgImg: "./images/bg/svømmehall.png",
				icon: "./images/icons/swimmer.png",
				subCategories: ["Butterfly", "Synkronsvømming"],
			},
		],

		//User data
		users: [
			{
				id: 0,
				userName: "Løftekongen86",
				userProfileImg: "./images/profiles/1.jpg",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 10991,
				userRanking: 1073,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "dag.einar67",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
				],
			},
		],
		//Event data
		events: [
			{
				eventId: 0,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Løping",
				eventSubCategory: "Friløp",
				eventIntensity: 1,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
			{
				eventId: 1,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Rygg",
				eventIntensity: 3,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
			{
				eventId: 2,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Biceps",
				eventIntensity: 1,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
			{
				eventId: 3,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Biceps",
				eventIntensity: 4,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
			{
				eventId: 4,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Biceps",
				eventIntensity: 4,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
			{
				eventId: 2,
				eventOwnerId: 0,
				eventName: "Løpetur i skogen",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Biceps",
				eventIntensity: 4,
				eventDate: "25.09.22",
				eventTime: "12:00",
				eventDescTitle: "Overkommelig skogstur for alle som vil",
				eventDescription:
					"Vi tar oss en liten løpetur i skogen ved Nøtterøy som alle kan være med på hvis de vil. Oppmøte ved Teigar skole litt før 12 slik at vi kan gjøre oss klare og kanskje preike litt før vi setter ut i skogen. Kle dere godt, det er ganske vått der om dagen.",
				eventParticipants: [
					{
						userId: 0,
						userImg: "./images/profiles/1.jpg",
					},
					{
						userId: 1,
						userImg: "./images/profiles/2.jpg",
					},
					{
						userId: 2,
						userImg: "./images/profiles/3.jpg",
					},
					{
						userId: 3,
						userImg: "./images/profiles/4.jpg",
					},
				],
			},
		],
	},
};
