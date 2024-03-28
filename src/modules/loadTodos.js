import delIcon from '../delete.png';
export default function loadTodos(name) {
    console.log(name)
document.getElementById('content').innerHTML = ''
const projectName = name
var projects = JSON.parse(localStorage.getItem('projects'));
projects = projects['projects']
if (name!="ALL" && name!= null){
for (const [key, value] of Object.entries(projects[name])){
let todoName = value[0]
let todoDate = value[2]
let priority = value[3]
createTodoCard(todoName, todoDate, projectName,key, priority)
}}
}
function createTodoCard(name, date, projectName, index, priority){
    const content = document.getElementById('content')
    let div=document.createElement('div')
    div.dataset.project = projectName
    div.dataset.index = index
    div.classList.add('todoCard')
    div.classList.add((priority=='1')? 'priority-low' : (priority=='2')? 'priority-medium' : 'priority-high')
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