import addDeleteOnclick from './modules/addDeleteOnclick.js';
import loadAddProject from './modules/loadAddProject';
import loadAddTodo from './modules/loadAddTodo.js';
import loadProjects from './modules/loadProjects';
import loadTodos from './modules/loadTodos.js';
import './style.css';
function init() {
    if (localStorage.getItem('projects') === null) {
        localStorage.setItem('projects', JSON.stringify({ projects: {} }));
    }

}
window.onload = function () {
    addButtonsOnclick()
        document.getElementById('all').onclick=function(){
            loadTodos('ALL')
        }
}

function addButtonsOnclick() {
    const apbtn = document.getElementById('add-project')
    apbtn.onclick = loadAddProject
    const atbtn = document.getElementById('add-todo')
    atbtn.onclick = loadAddTodo
}
init()
loadProjects()
addDeleteOnclick()
