function openCard(i) {
  model.app.state.selectedCard = i === model.app.state.selectedCard ? null : i;
  mainView();
}
