export default function deleteTodo(project, index) {
    var projects = JSON.parse(localStorage.getItem('projects'));
    delete projects.projects[project][index]
    for(let i = 1; i<projects.projects[project].length; i++){projects.projects[project]= Object.values(projects.projects[project])};
    localStorage.setItem('projects', JSON.stringify(projects));
}
