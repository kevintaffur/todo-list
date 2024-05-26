export default class HomeListener {
  homeView;

  constructor(homeView) {
    this.homeView = homeView;
  }

  loadListeners() {
    this.homeView.projectsDOM.forEach((projectDOM, index) => {
      projectDOM.addEventListener("click", () => {
        console.log("event!", index);
      });
    });
  }
}
