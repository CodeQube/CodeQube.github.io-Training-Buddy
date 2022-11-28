let model = {
	//app
	app: {
		//What page you are on
		activePage: "home",
		subPage: "history",
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
			searchBar: false,
			selectedCard: null, //Card that is selected by event ID, this expands the card
			activeUser: "Løftekongen86", //The logged in user
			selectedUser: "Løftekongen86", //User you click in order to view its profile etc
			activeReviewEvent: null, //The event that is selected in order to write a review
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
		newEventIntensity: 2, //value between 1-4
		newEventMaxAttendees: 4, // value between 1-4. Creator counts as 1 of the attendees but does not have to be included in the maxAttendees
		newEventCreateBtn: "",
		newEventImg: "",
		newEventImgOpen: "",
		newEventTimeDate: "",
		newEventTime: "",
		newEventDate: "",
		//reviews
		// giveEventReview: {
		//   inspiredScore: 5,
		//   gainScore: 5,
		// },

		// giveAttendantReview: {
		//   reviewScore: 0,
		//   reviewText: 'Skriv en setning her...',
		// },
	},

	//data
	data: {
		leaderboardArray: [],

		categories: [
			{
				name: "Løping",
				bgImg: "./images/bg/løping.jpg",
				icon: "./images/icons/sko.png",
				subCategories: ["Langdistanseløp", "Friløp", "Halvmaraton"],
			},
			{
				name: "Styrke",
				bgImg: "./images/bg/styrke.jpg",
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
				bgImg: "./images/bg/svømming.png",
				icon: "./images/icons/swimmer.png",
				subCategories: ["Butterfly", "Synkronsvømming"],
			},
		],

		//User data
		users: [
			{
				id: 0,
				userName: "Løftekongen86",
				userLocation: "Larvik",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 4050,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
					{
						reviewSubmitter: "britt.elin69",
						reviewScore: 4,
						reviewDescription: "hehe",
					},
					{
						reviewSubmitter: "kjellwastaken",
						reviewScore: 5,
						reviewDescription: "hallo",
					},
				],
			},
			{
				id: 1,
				userName: "britt.elin69",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 4700,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription:
							"Morsom karMorsom karMorsom karMorsom karMorsom karMorsom karMorsom karMorsom kar",
					},
				],
			},
			{
				id: 2,
				userName: "kjellwastaken",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 780,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
				],
			},
			{
				id: 3,
				userName: "jensintens",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 1045,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
				],
			},
			{
				id: 4,
				userName: "hugobigg",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 150,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
				],
			},
			{
				id: 5,
				userName: "glenntore420",
				userProfileImg: "../images/profileImg/0.jpg",
				userBioBackground: "../images/profileImg/profileBg.png",
				userDescription:
					"Største karen i Larvik, løfta siden før jeg fikk hår på brøstet, Roars gym er plassen 💪🏋",
				userTags: ["Pumping", "Proteinpulver", "Vekter", "Roars", "Trening"],
				userPoints: 4051,
				userRanking: null,
				userCreatedEventsCounter: 64,
				userAttendedEventsCounter: 248,
				userNotifications: [],
				userUpcomingEvents: [],
				userEventHistory: [],
				userManageableEvents: [],
				userReviews: [
					{
						reviewSubmitter: "jensintens",
						reviewScore: 5,
						reviewDescription: "Morsom kar",
					},
				],
			},
		],

		//Participants
		eventParticipants: [
			//Event 0
			{
				eventId: 0,
				isConfirmed: false,
				userName: "kjellwastaken",
				userImg: "./images/profiles/2.jpg",
			},
			{
				eventId: 0,
				isConfirmed: false,
				userName: "jensintens",
				userImg: "./images/profiles/3.jpg",
			},
			{
				eventId: 0,
				isConfirmed: false,
				userName: "hugobigg",
				userImg: "./images/profiles/4.jpg",
			},
			{
				eventId: 0,
				isConfirmed: false,
				userName: "glenntore420",
				userImg: "./images/profiles/1.jpg",
			},
			//Event 1
			{
				eventId: 1,
				isConfirmed: false,
				userName: "Løftekongen86",
				userImg: "./images/profiles/2.jpg",
			},
			{
				eventId: 1,
				isConfirmed: false,
				userName: "jensintens",
				userImg: "./images/profiles/3.jpg",
			},
			{
				eventId: 1,
				isConfirmed: false,
				userName: "hugobigg",
				userImg: "./images/profiles/4.jpg",
			},
			{
				eventId: 1,
				isConfirmed: false,
				userName: "glenntore420",
				userImg: "./images/profiles/1.jpg",
			},
			//Event 2
			{
				eventId: 4,
				isConfirmed: true,
				userName: "Løftekongen86",
				userImg: "./images/profiles/4.jpg",
			},
			{
				eventId: 4,
				isConfirmed: true,
				userName: "jensintens",
				userImg: "./images/profiles/3.jpg",
			},
			{
				eventId: 4,
				isConfirmed: true,
				userName: "hugobigg",
				userImg: "./images/profiles/4.jpg",
			},
			{
				eventId: 4,
				isConfirmed: true,
				userName: "glenntore420",
				userImg: "./images/profiles/1.jpg",
			},
		],

		//Event data
		events: [
			{
				eventId: 0,
				EventMaxAttendees: 4,
				eventOwnerId: "Løftekongen86",
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
			},
			{
				eventId: 1,
				eventOwnerId: "britt.elin69",
				eventName: "Rusletur rundt kvartalet",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Løping",
				eventSubCategory: "Friløp",
				eventIntensity: 1,
				eventDate: "5.10.22",
				eventTime: "12:00",
				eventDescTitle: "En kort luftetur",
				eventDescription:
					"Hei alle sammen. Jeg tenkte vi kunne ta oss en luftetur nå på lørdag hvor vi først rusler en liten tur og så ender opp på kafe når vi er ferdige",
			},
			{
				eventId: 2,
				eventOwnerId: "Løftekongen86",
				EventMaxAttendees: 4,
				eventName: "Ryggøkt for nerder",
				eventLocation: "Larvik",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/styrke.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/styrkeOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Rygg",
				eventIntensity: 4,
				eventDate: "13.10.22",
				eventTime: "15:00",
				eventDescTitle: "FRAM MED RYGGEN",
				eventDescription:
					"Oppmøte på Roars som vanlig! Det blir en ganske hardcore økt men det burde dere tåle",
			},
			{
				eventId: 3,
				eventOwnerId: "Løftekongen86",
				eventName: "Pumping",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/løping.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/løpingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Biceps",
				eventIntensity: 4,
				eventDate: "17.10.22",
				eventTime: "10:00",
				eventDescTitle: "Tøff økt for de som vil pumpe på Roars",
				eventDescription:
					"Det er fredan og det betyr at det er tid for å pumpe litt jern igjen. Vi kjører en heftig økt for å blodtrimme bissane",
			},
			{
				eventId: 4,
				eventOwnerId: "kjellwastaken",
				eventName: "Akrobatikk for nybegynnere",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/styrke.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/styrkeOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Styrke",
				eventSubCategory: "Rygg",
				eventIntensity: 2,
				eventDate: "22.11.22",
				eventTime: "19:00",
				eventDescTitle: "Klatring og akrobatikk for nybegynnere",
				eventDescription:
					"Jeg er så heldig å ha fått låne ribbeveggen på Berg Skole. Vi kjører litt klatring og diverse akrobatiske øvelser. Vell møtt!",
			},
			{
				eventId: 5,
				eventOwnerId: "Løftekongen86",
				eventName: "Spinning",
				eventLocation: "Nøtterøy",
				eventIcon: "", // This gets its value from the category array by a controller function this.categories[0].icon
				eventImg: "./images/bg/sykling.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventImgOpen: "./images/bg/syklingOpen.jpg", //  This gets its value from the category array by a controller function this.categories[0].bgImg
				eventCategory: "Sykling",
				eventSubCategory: "Spinning",
				eventIntensity: 3,
				eventDate: "29.10.22",
				eventTime: "14:00",
				eventDescTitle: "Uforventet Spinning økt",
				eventDescription:
					"Etter dårlig resultat fra bulkinga har jeg bestemt meg for å kjøre en spinningøkt for å få vekk unødvendig fett fra magen. Kom og bli med!",
			},
		],
	},
};
