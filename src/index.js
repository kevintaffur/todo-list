import Project from "./models/Project";
import Todo from "./models/Todo";

const project = new Project("test project", "this is a test project");
const todo1 = new Todo("todo title", "todo description", new Date(), "todopriority");
console.log(project);
console.log(todo1);

project.addTodoToProject(todo1);
console.log(project);
