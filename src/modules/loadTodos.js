import delIcon from '../delete.png';
export default function loadTodos(name) {
document.getElementById('content').innerHTML = ''
const projectName = name
var projects = JSON.parse(localStorage.getItem('projects'));
projects = projects['projects']
if (name!="ALL"){
for (const [key, value] of Object.entries(projects[name])){
let todoName = value.name
let todoDate = value.date
createTodoCard(todoName, todoDate)
}}
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
    let deleteIcon = new Image()
    deleteIcon.src=delIcon
    div.appendChild(deleteIcon)
    content.appendChild(div)

}