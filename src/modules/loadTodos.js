export default function loadTodos(name) {
const projectName = name
var projects = JSON.parse(localStorage.getItem('projects'));
projects = projects['projects']
console.log(projects)
for (const [key, value] of Object.entries(projects[name])){
let todoName = value.name
let todoDate = value.date
createTodoCard(todoName, todoDate)

}
}
function createTodoCard(name, date){
    const content = document.getElementById('content')
    let div=document.createElement('div')
    div.classList.add('todoCard')
    let nameP = document.createElement('p')
    nameP.innerText=name
    div.appendChild(nameP)
    let dateP = document.createElement('p')
    dateP.innerText=date
    div.appendChild(dateP)
    content.appendChild(div)

}