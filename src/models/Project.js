export default class Project {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  getTitle() {
    return this.title;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  getDescription() {
    return this.description;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  addTodoToProject(newTodo) {
    this.todos.push(newTodo);
  }
}
