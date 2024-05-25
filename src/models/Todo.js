export default class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #checklist;
  #done;

  constructor(title, description, dueDate, priority) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = [];
    this.#checklist = [];
    // todo or done
    this.#done = false;
  }

  getTitle() {
    return this.#title;
  }

  setTitle(newTitle) {
    this.#title = newTitle
  }

  getDescription() {
    return this.#description;
  }

  setDescription(newDescription) {
    this.#description = newDescription;
  }

  getDueDate() {
    return this.#dueDate;
  }

  setDueDate(newDate) {
    this.#dueDate = newDate;
  }

  getPriority() {
    return this.#priority;
  }

  setPriority(newPriority) {
    this.#priority = newPriority;
  }

  isDone() {
    return this.#done;
  }

  isDone(newStatus) {
    this.#done = newStatus;
  }

  addNoteToTodo(newNote) {
    this.#notes.push(newNote);
  }

  addChecklistToTodo(newChecklist) {
    this.#checklist.push(newChecklist);
  }
}
