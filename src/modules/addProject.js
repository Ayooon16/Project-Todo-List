export default function addProject(name){
    var projects = JSON.parse(localStorage.getItem('projects'));
    projects.projects[name] = projects.projects[name] || [];
    localStorage.setItem('projects', JSON.stringify(projects));
}