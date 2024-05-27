import ProjectService from "../services/ProjectService";

export default class ProjectView {
  projectService;
  project;
  projectDOM;
  parent;

  constructor(id) {
    this.projectService = new ProjectService();
    this.parent = document.querySelector("#content");
    this.project = this.projectService.getProject(id);
  }

  createView() {
    const projectContainer = document.createElement("div");
    const projectTitle = document.createElement("div");
    const projectDescription = document.createElement("div");
    const projectTodos = document.createElement("div");

    projectContainer.classList.add("project-container");
    projectTitle.classList.add("project-title");
    projectDescription.classList.add("project-description");
    projectTodos.classList.add("project-todos");

    projectTitle.textContent = this.project.title;
    projectDescription.textContent = this.project.description;

    this.project.todos.forEach((td) => {
      const todo = document.createElement("div");
      const title = document.createElement("div");
      const description = document.createElement("div");
      const dueDate = document.createElement("div");
      const priority = document.createElement("div");
      const notes = document.createElement("div");
      const checklist = document.createElement("div");
      const done = document.createElement("div");

      todo.classList.add("todo");
      title.classList.add("todo-title");
      description.classList.add("todo-description");
      dueDate.classList.add("todo-duedate");
      priority.classList.add("todo-priority");
      notes.classList.add("todo-notes");
      checklist.classList.add("todo-checklist");
      done.classList.add("todo-done");

      title.textContent = td.title;
      description.textContent = td.description;
      dueDate.textContent = td.dueDate;
      priority.textContent = td.priority;
      done.textContent = td.done;

      td.notes.forEach((nt) => {
        const note = document.createElement("div");
        const content = document.createElement("div");

        note.classList.add("note");
        content.classList.add("note-content");

        content.textContent = nt.content;

        notes.appendChild(note);
      });

      td.checklist.forEach(cl => {
        const check = document.createElement("div");
        const content = document.createElement("div");
        const done = document.createElement("div");

        check.classList.add("check");
        content.classList.add("check-content");
        done.classList.add("check-done");

        content.textContent = cl.content;
        done.textContent = cl.done;

        checklist.appendChild(check);
      });
      projectTodos.appendChild(todo);
    });

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(projectDescription);
    projectContainer.appendChild(projectTodos);

    this.projectDOM = projectContainer;
  }

  render() {
    this.parent.appendChild(this.projectDOM);
  }

  cleanScreen() {
    while (this.parent.lastChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }
}
