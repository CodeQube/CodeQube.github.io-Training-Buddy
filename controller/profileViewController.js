function profileHandleSwipe() {
  switch (model.app.subPage) {
    case 'bio':
      if (touchendX < touchstartX) {
        model.app.subPage = 'eventsCreated';
        profileBioView();
      }

      if (touchendX > touchstartX) {
        model.app.subPage = 'reviews';
        profileBioView();
      }
      break;

    case 'reviews':
      if (touchendX < touchstartX) {
        model.app.subPage = 'bio';
        profileBioView();
      }
      break;

    case 'eventsCreated':
      if (touchendX > touchstartX) {
        model.app.subPage = 'bio';
        profileBioView();
      }
      break;
  }
}
