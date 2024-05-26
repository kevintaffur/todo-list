import "./styles.css";
import HomeView from "./views/HomeView";
import HomeListener from "./listeners/HomeListener";
import ProjectFormView from "./views/ProjectFormView";
import ProjectFormListener from "./listeners/ProjectFormListener";

const home = new HomeView();
const homeListener = new HomeListener(home);
const projectForm = new ProjectFormView();
const projectFormListener = new ProjectFormListener(projectForm, home, homeListener);
home.render();
homeListener.loadListeners();
projectFormListener.loadListener();
