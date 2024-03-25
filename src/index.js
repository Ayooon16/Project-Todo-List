import addProject from './modules/addProject';
import addTodo from './modules/addTodo';
import deleteProject from './modules/deleteProject';
import deleteTodo from './modules/deleteTodo';
import loadProjects from './modules/loadProjects';
import loadTodos from './modules/loadTodos.js';
import './style.css';
function init() {
    if (localStorage.getItem('projects') === null) {
        localStorage.setItem('projects', JSON.stringify({ projects: {} }));
    }

}
window.onload = function(){
    const projects = document.querySelectorAll('.navCard')
    console.log(projects)
projects.forEach(element => {
    element.onclick = function(){
        loadTodos(this.firstChild.innerText)

    }
});
}
init()
loadProjects()
//addProject('else')
//addProject('something')
const data = {
    name: 'thing',
    date: '2323',
    something: 'xd',
}

//deleteProject('run')
//deleteTodo('run', 1)
//addTodo('gym',data)
//addTodo('run',data)
