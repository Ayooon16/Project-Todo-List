import addProject from './modules/addProject';
import addTodo from './modules/addTodo';
import deleteProject from './modules/deleteProject';
import deleteTodo from './modules/deleteTodo';
import loadAddProject from './modules/loadAddProject';
import loadInputOverlay from './modules/loadInputOverlay.js';
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
function addDeleteOnclick() {
    const todos = document.querySelectorAll('.todoCard')
    todos.forEach(element => {
        element.children[2].onclick = function () {
            deleteTodo(this.parentElement.dataset.project, this.parentElement.dataset.index)
            loadTodos(this.parentElement.dataset.project)
            addDeleteOnclick()

          }
    });
}
function addProjectsOnclick() {
    const projects = document.querySelectorAll('.navCard')
    projects.forEach(element => {
        element.onclick = function () {
            loadTodos(this.firstChild.innerText)
            addDeleteOnclick()

        }
    });
}
function addButtonsOnclick(){
    const apbtn = document.getElementById('add-project')
    apbtn.onclick=loadAddProject
}
init()
loadProjects()
//addProject('gym')
//addProject('something')
const data = {
    name: 'thing',
    date: '2323',
    something: 'xd',
}

//deleteProject('run')
//deleteTodo('run', 1)
addTodo('gym',data)
//addTodo('run',data)
