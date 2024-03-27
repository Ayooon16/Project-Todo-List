import addProject from "./addProject"
import loadInputOverlay from "./loadInputOverlay"

export default function loadAddProject() {

loadInputOverlay()
 const form=document.getElementById('form')   
 const projectName = document.createElement('input')
 const label=document.createElement('label')
 label.innerHTML="Name of your project"
 form.appendChild(label)
 projectName.id='projectName'
 form.appendChild(projectName)
 const btn = document.createElement('button')
 btn.innerHTML='Add project'
 btn.onclick=function(){
    addProject(projectName.value)
 }
 form.appendChild(btn)
}
