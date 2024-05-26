import Project from "../models/Project";

export default class ProjectRepository {
  static instance = null;
  projects;
  memory;

  constructor() {
    if (ProjectRepository.instance) {
      return ProjectRepository.instance;
    }
    ProjectRepository.instance = this;

    this.projects = [];
    this.memory = localStorage.getItem("projects");

    if (!this.memory) {
      const defaultProject = new Project("default project", "default project");
      this.projects.push(defaultProject);
      localStorage.setItem("projects", JSON.stringify(this.projects));
    } else {
      JSON.parse(memory).forEach(project => this.projects.push(project));
    }
  }

  getProjets() {
    return this.projects;
  }

  saveState() {
    localStorage.setItem("projects", JSON.stringify(this.projects));
  }
}
