import loadInputOverlay from "./loadInputOverlay"
import addTodo from "./addTodo.js"
export default function loadAddTodo() {
    loadInputOverlay()
    const form=document.getElementById('form')   
    const todoName = document.createElement('input')
    todoName.id='todoName'
    const labelName=document.createElement('label')
    labelName.innerHTML='Title'
    const todoDescription = document.createElement('textarea')
    todoDescription.id='todoDescription'
    const labelDescription=document.createElement('label')
    labelDescription.innerHTML='Description'
    const todoDate = document.createElement('input')
    todoDate.type='date'
    todoDate.id='todoDate'
    const labelDate=document.createElement('label')
    labelDate.innerHTML='Date due'
    const labelImportance=document.createElement('label')
    labelImportance.innerHTML='Importance'
    const radio1=document.createElement('input')
    radio1.type='radio'
    radio1.name='importance'
    radio1.id='radio1'
    const radio2=document.createElement('input')
    radio2.type='radio'
    radio2.name='importance'
    radio2.id='radio2'
    const radio3=document.createElement('input')
    radio3.type='radio'
    radio3.name='importance'
    radio3.id='radio3'
    const selectLabel=document.createElement('label')
    selectLabel.innerHTML='Project'
    const selectProject=document.createElement('select')
    const projects = JSON.parse(localStorage.getItem('projects'));
    for (const [key] of Object.entries(projects.projects)){
       const option=document.createElement('option')
       option.value=key
       option.innerHTML=key
       selectProject.appendChild(option)
    }
    form.appendChild(labelName)
    form.appendChild(todoName)
    form.appendChild(labelDescription)
    form.appendChild(todoDescription)
    form.appendChild(labelDate)
    form.appendChild(todoDate)
    form.appendChild(labelImportance)
    form.appendChild(radio1)
    form.appendChild(radio2)
    form.appendChild(radio3)
    form.appendChild(selectLabel)
    form.appendChild(selectProject)
    let btn=document.createElement('button')
    btn.id='btn'
    btn.innerHTML='Submit'
    btn.onclick=function(){
       const data = [todoName.value, todoDescription.value, todoDate.value, ((radio3.checked)? '3' : (radio2.checked)? '2' : '1')]
        addTodo(selectProject.value, data)

    }
    form.appendChild(btn)

}