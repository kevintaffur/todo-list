import Project from "../models/Project";
import ProjectService from "../services/ProjectService";
import Validator from "../models/Validator";

export default class ProjectFormListener {
  projectFormView;
  projectService;
  homeView;
  homeListener;

  constructor(projectFormView, homeView, homeListener) {
    this.projectFormView = projectFormView;
    this.projectService = new ProjectService();
    this.homeView = homeView;
    this.homeListener = homeListener;
  }

  loadListener() {
    this.projectFormView.button.addEventListener("click", () => {
      const title = this.projectFormView.title.value;
      const description = this.projectFormView.description.value;

      // Validate values
      if (!(Validator.validateString(title) && Validator.validateString(description))) {
        return;
      }

      // Create new project
      const project = new Project(title, description);

      // Add project to repo (localStorage)
      this.projectService.addProject(project);

      // Clean form fields
      this.projectFormView.cleanForm();

      // Add project to dom objects array
      this.homeView.appendProjectToDOM(project);

      // Load listener for all projects
      this.homeListener.loadListeners();
      
      // Clean screen (projects)
      this.homeView.cleanProjects();

      // Render all projects
      this.homeView.renderProjects();
    });
  }
}
