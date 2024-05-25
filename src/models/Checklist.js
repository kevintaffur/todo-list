export default class Checklist {
  #content;
  #done;

  constructor(content) {
    this.#content = content;
    this.#done = false;
  }

  getContent() {
    return this.#content;
  }

  setContent(newContent) {
    this.#content = newContent;
  }

  isDone() {
    return this.#done;
  }

  isDone(newStatus) {
    this.#done = newStatus;
  }
}
