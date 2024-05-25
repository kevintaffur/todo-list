export default class Note {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }

  setContent(newContent) {
    this.content = newContent;
  }
}
