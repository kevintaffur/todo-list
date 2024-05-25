import Note from "./Note";
import Checklist from "./Checklist";
import Todo from "./Todo";

export default class Validator {
  static validateString(newString) {
    if (typeof newString === "string" && newString.trim().length > 0) {
      return true;
    } else {
      throw new Error("Invalid string");
    }
  }

  static validateDate(newDate) {
    if (newDate instanceof Date) {
      return true;
    } else {
      throw new Error("Invalid date");
    }
  }

  static validateBool(status) {
    if (typeof status === "boolean") {
      return true;
    } else {
      throw new Error("Invalid boolean");
    }
  }

  static validateNote(newNote) {
    if (newNote instanceof Note) {
      return true;
    } else {
      throw new Error("Invalid note");
    }
  }

  static validateChecklist(newChecklist) {
    if (newChecklist instanceof Checklist) {
      return true;
    } else {
      throw new Error("Invalid checklist");
    }
  }

  static validateTodo(newTodo) {
    if (newTodo instanceof Todo) {
      return true;
    } else {
      throw new Error("Invalid checklist");
    }
  }
}
