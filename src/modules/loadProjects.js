import delIcon from '../delete.png';

export default function loadProjects() {
    var projects = JSON.parse(localStorage.getItem('projects'));
    const nav = document.getElementById('nav')
    nav.innerHTML=''
    for (const [key] of Object.entries(projects.projects)){
        let div=document.createElement('div')
        div.classList.add('navCard')
        div.dataset.project = key
        let paragraph = document.createElement('p')
        paragraph.innerText=key
        div.appendChild(paragraph)
        let deleteIcon = new Image()
        deleteIcon.src=delIcon
        div.appendChild(deleteIcon)
        nav.appendChild(div)
    }
}