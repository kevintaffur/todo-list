export default class Project {
  #title;
  #description;
  #todos;

  constructor(title, description) {
    this.#title = title;
    this.#description = description;
    this.#todos = [];
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    this.#description = newDescription;
  }

  addTodoToProject(newTodo) {
    this.#todos.push(newTodo);
  }
}
