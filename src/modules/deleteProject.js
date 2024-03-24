export default function deleteProject(name) {
    var projects = JSON.parse(localStorage.getItem('projects'));
    delete projects.projects[name]
    localStorage.setItem('projects', JSON.stringify(projects));
}