export default function addTodo(name, data){
    var projects = JSON.parse(localStorage.getItem('projects'))    ;
    projects['projects'][name].push(data)
    console.log(projects)
    localStorage.setItem('projects', JSON.stringify(projects));
}
