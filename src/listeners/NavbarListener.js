import HomeView from "../views/HomeView";
import ProjectFormView from "../views/ProjectFormView";
import HomeListener from "./HomeListener";
import ProjectFormListener from "./ProjectFormListener";

export default class NavbarListener {
  logo;
  button;
  parent;

  constructor() {
    this.logo = document.querySelector("#logo");
    this.button = document.querySelector("#new-project");
    this.parent = document.querySelector("#content");
  }

  loadListeners() {
    this.logo.addEventListener("click", (e) => {
      this.cleanScreen();
      const home = new HomeView();
      home.createAndRenderView();
      const homeListener = new HomeListener(home);
      const projectForm = new ProjectFormView();
      const projectFormListener = new ProjectFormListener(projectForm, home, homeListener);

      homeListener.loadListeners();
      projectFormListener.loadListener();
      this.button.textContent = "New Project";
    });

    this.button.addEventListener("click", (e) => {
      if (e.target.innerText === "New Project") {
        
      }
      if (e.target.innerText === "New Todo") {
        
      }
    });
  }

  cleanScreen() {
    while (this.parent.lastChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }
}
