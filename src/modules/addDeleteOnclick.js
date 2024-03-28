import deleteProject from "./deleteProject";
import deleteTodo from "./deleteTodo";
import loadProjects from "./loadProjects";
import loadTodos from "./loadTodos";

export default function addDeleteOnclick() {
    const todos = document.querySelectorAll('.todoCard')
    todos.forEach(element => {
        element.children[2].onclick = function () {
            deleteTodo(this.parentElement.dataset.project, this.parentElement.dataset.index)
            loadTodos(this.parentElement.dataset.project)
            addDeleteOnclick()

        }
    });
    const projects = document.querySelectorAll('.navCard')
    projects.forEach(element => {
        console.log(element)
        element.children[1].onclick = function () {
            console.log(this.parentElement.dataset.project)
            deleteProject(this.parentElement.dataset.project)
           loadProjects()
            addDeleteOnclick()

        }
    });
}