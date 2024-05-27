import ProjectView from "../views/ProjectView";

export default class HomeListener {
  homeView;
  createButton;

  constructor(homeView) {
    this.homeView = homeView;
    this.createButton = document.querySelector("#new-project");
  }

  loadListeners() {
    this.homeView.projectsDOM.forEach((projectDOM, index) => {
      projectDOM.addEventListener("click", () => {
        console.log("event!", index);
        const projectView = new ProjectView(index);
        projectView.createView();
        projectView.cleanScreen();
        projectView.render();
        this.createButton.textContent = "New Todo";
      });
    });
  }
}
