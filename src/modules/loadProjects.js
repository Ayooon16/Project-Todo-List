export default function loadProjects() {
    var projects = JSON.parse(localStorage.getItem('projects'));
    const nav = document.getElementById('nav')
    nav.innerHTML=''
    for (const [key] of Object.entries(projects.projects)){
        let div=document.createElement('div')
        div.classList.add('navCard')
        let paragraph = document.createElement('p')
        paragraph.innerText=key
        div.appendChild(paragraph)
        nav.appendChild(div)
    }
}