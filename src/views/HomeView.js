import ProjectService from "../services/ProjectService";

export default class HomeView {
  projectService;
  projectsDOM;
  parent;
  projects;

  constructor() {
    this.projectService = new ProjectService();
    this.projectsDOM = [];
    this.projectService.getAllProjects().forEach((project) => {
      this.appendProjectToDOM(project);
    });
    this.parent = document.querySelector("#content");
  }

  createAndRenderView() {
    this.projects = document.createElement("div");
    const formContainer = document.createElement("div");
    const form = document.createElement("form");
    const title = document.createElement("div");
    const description = document.createElement("div");
    const button = document.createElement("button");
    
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");

    const descriptionLabel = document.createElement("label");
    const descriptionTextArea = document.createElement("textarea");

    this.projects.id = "projects";

    formContainer.id = "form-container";
    form.id = "project-form";
    title.classList.add("project-title");
    description.classList.add("project-description");
    button.id = "create-project";

    titleInput.id = "project-title";
    descriptionTextArea.id = "project-description";
    descriptionTextArea.rows = "3";

    titleLabel.textContent = "Title";
    descriptionLabel.textContent = "Description";
    button.textContent = "Create";

    title.appendChild(titleLabel);
    title.appendChild(titleInput);

    description.appendChild(descriptionLabel);
    description.appendChild(descriptionTextArea);

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(button);

    formContainer.appendChild(form);

    this.projectsDOM.forEach((project) => {
      this.projects.appendChild(project);
    });

    this.parent.appendChild(this.projects);
    this.parent.appendChild(formContainer);
  }

  renderProjects() {
    this.projectsDOM.forEach((project) => {
      this.projects.appendChild(project);
    });
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

  cleanScreen() {
    while (this.parent.lastChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }

  cleanProjects() {
    while (this.projects.lastChild) {
      this.projects.removeChild(this.projects.lastChild);
    }
  }

  removeProjectFromDOM(id) {
    this.projectsDOM.splice(id, 1);
  }
}
