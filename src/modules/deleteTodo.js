export default function deleteTodo(project, index) {
    var projects = JSON.parse(localStorage.getItem('projects'));
    delete projects.projects[project][index]
    localStorage.setItem('projects', JSON.stringify(projects));


}
