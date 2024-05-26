import ProjectService from "../services/ProjectService";

export default class HomeView {
  projectService;
  projectsDOM;
  parent;

  constructor() {
    this.projectService = new ProjectService();
    this.projectsDOM = [];
    this.projectService.getAllProjects().forEach((project) => {
      this.appendProjectToDOM(project);
    });
    this.parent = document.querySelector("#projects");
  }

  appendProjectToDOM(project) {
    const projectDOM = document.createElement("div");
    const projectDOMTitle = document.createElement("div");
    const projectDOMDescription = document.createElement("div");

    projectDOM.classList.add("project");
    projectDOMTitle.classList.add("project-title");
    projectDOMDescription.classList.add("project-description");

    projectDOMTitle.textContent = project.title;
    projectDOMDescription.textContent = project.description;

    projectDOM.appendChild(projectDOMTitle);
    projectDOM.appendChild(projectDOMDescription);

    this.projectsDOM.push(projectDOM);
  }

  render() {
    this.projectsDOM.forEach((project) => {
      this.parent.appendChild(project);
    });
  }

  cleanScreen() {
    while (this.parent.lastChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }

  removeProjectFromDOM(id) {
    this.projectsDOM.splice(id, 1);
  }
}
