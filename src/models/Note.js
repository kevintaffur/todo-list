export default class Note {
  #content;

  constructor(content) {
    this.#content = content;
  }

  getContent() {
    return this.#content;
  }

  setContent(newContent) {
    this.#content = newContent;
  }
}
