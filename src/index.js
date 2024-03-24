import addProject from './modules/addProject';
import './style.css';
function init() {
    if (localStorage.getItem('projects') === null) {
        localStorage.setItem('projects', JSON.stringify({ projects: {} }));
    }
}
init()
addProject('gym')
addProject('run')
