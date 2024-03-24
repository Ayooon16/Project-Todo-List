import './style.css';

function init(){
    if (typeof localStorage.projects == 'undefined'){
        localStorage.projects = []
    }
}
init()