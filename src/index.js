import addProject from './modules/addProject';
import addTodo from './modules/addTodo';
import deleteProject from './modules/deleteProject';
import deleteTodo from './modules/deleteTodo';

import './style.css';
function init() {
    if (localStorage.getItem('projects') === null) {
        localStorage.setItem('projects', JSON.stringify({ projects: {} }));
    }
}
init()
//addProject('gym')
//addProject('run')
const data = {
    name: 'thing',
    date: '2323',
    something: 'xd',
}
//deleteProject('run')
deleteTodo('gym', 5)
//addTodo('gym',data)
//addTodo('run',data)
