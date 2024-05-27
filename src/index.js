import "./styles.css";
import HomeView from "./views/HomeView";
import HomeListener from "./listeners/HomeListener";
import ProjectFormView from "./views/ProjectFormView";
import ProjectFormListener from "./listeners/ProjectFormListener";
import NavbarListener from "./listeners/NavbarListener";

const home = new HomeView();
home.createAndRenderView();
const homeListener = new HomeListener(home);
const projectForm = new ProjectFormView();
const projectFormListener = new ProjectFormListener(projectForm, home, homeListener);
const navbarListener = new NavbarListener();

homeListener.loadListeners();
navbarListener.loadListeners();
projectFormListener.loadListener();
