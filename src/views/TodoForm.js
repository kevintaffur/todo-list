export default class TodoForm {
  parent;

  constructor() {
    this.parent = document.querySelector("#project-form");
  }

  createForm() {
    const title = document.createElement("div");
    const description = document.createElement("div");
    const dueDate = document.createElement("div");
    const priority = document.createElement("div");

    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");

    const descriptionLabel = document.createElement("label");
    const descriptionTextArea = document.createElement("textarea");

    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");

    const priorityLabel = document.createElement("label");
    const priorityInput = document.createElement("input");

    const button = document.createElement("button");

    title.classList.add("todo-form-title");
    description.classList.add("todo-form-description");
    dueDate.classList.add("todo-form-duedate");
    priority.classList.add("todo-form-priority");

    titleLabel.classList.add("todo-form-title-label");
    titleInput.classList.add("todo-form-title-input");

    descriptionLabel.classList.add("todo-form-description-label");
    descriptionTextArea.classList.add("todo-form-description-textArea");

    dueDateLabel.classList.add("todo-form-duedate-label");
    dueDateInput.classList.add("todo-form-duedate-input");

    priorityLabel.classList.add("todo-form-priority-label");
    priorityInput.classList.add("todo-form-priority-input");

    button.classList.add("create-todo");

    titleLabel.textContent = "Title";
    descriptionLabel.textContent = "Description";
    dueDateLabel.textContent = "Due Date";
    priorityLabel.textContent = "Priority";

    title.appendChild(titleLabel);
    title.appendChild(titleInput);

    description.appendChild(descriptionLabel);
    description.appendChild(descriptionTextArea);

    dueDate.appendChild(dueDateLabel);
    dueDate.appendChild(dueDateInput);

    priority.appendChild(priorityLabel);
    priority.appendChild(priorityInput);

    this.parent.appendChild(title);
    this.parent.appendChild(description);
    this.parent.appendChild(dueDate);
    this.parent.appendChild(priority);
    this.parent.appendChild(button);
  }

  cleanForm() {
    while (this.parent.lastChild) {
      this.parent.removeChild(this.parent.lastChild);
    }
  }
}
