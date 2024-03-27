import addDeleteOnclick from './modules/addDeleteOnclick.js';
import loadAddProject from './modules/loadAddProject';
import loadProjects from './modules/loadProjects';
import loadTodos from './modules/loadTodos.js';
import './style.css';
function init() {
    if (localStorage.getItem('projects') === null) {
        localStorage.setItem('projects', JSON.stringify({ projects: {} }));
    }

}
window.onload = function () {
    addProjectsOnclick()
    addButtonsOnclick()
}
function addProjectsOnclick() {
    const projects = document.querySelectorAll('.navCard')
    projects.forEach(element => {
        element.children[0].onclick = function () {
            loadTodos(this.innerText)
            addDeleteOnclick()

        }
    });
}
function addButtonsOnclick() {
    const apbtn = document.getElementById('add-project')
    apbtn.onclick = loadAddProject
}
init()
loadProjects()
addDeleteOnclick()
