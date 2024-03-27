import addDeleteOnclick from "./addDeleteOnclick";
import deleteOverlay from "./deleteOverlay";
import loadProjects from "./loadProjects";

export default function addProject(name){
    var projects = JSON.parse(localStorage.getItem('projects'));
    projects.projects[name] = projects.projects[name] || [];
    localStorage.setItem('projects', JSON.stringify(projects));
    deleteOverlay()
    loadProjects()
    addDeleteOnclick()
}