import ProjectRepository from "../repositories/ProjectRepository";

export default class ProjectService {
  projectRepository;

  constructor() {
    this.projectRepository = new ProjectRepository();
  }

  addProject(project) {
    this.projectRepository.getProjets().push(project);
    this.projectRepository.saveState();
  }

  getAllProjects() {
    return this.projectRepository.getProjets();
  }

  getProject(id) {
    return this.projectRepository.getProjets()[id];
  }

  removeProject(id) {
    this.projectRepository.getProjets().splice(id, 1);
    this.projectRepository.saveState();
  }

  updateProject(id, project) {
    const currentProject = this.projectRepository.getProjets()[id];
    const updatedProject = {
      ...currentProject,
      title: project.title,
      description: project.description,
    };
    this.projectRepository.getProjets()[id] = updatedProject;
    this.projectRepository.saveState();
  }
}
