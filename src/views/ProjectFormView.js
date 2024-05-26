export default class ProjectFormView {
  title;
  description;
  button;

  constructor() {
    this.title = document.querySelector("#project-title");
    this.description = document.querySelector("#project-description");
    this.button = document.querySelector("#create-project");
  }

  cleanForm() {
    this.title.value = "";
    this.description.value = "";
  }
}
