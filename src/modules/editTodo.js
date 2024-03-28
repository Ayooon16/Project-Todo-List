import deleteOverlay from "./deleteOverlay";
import loadAddTodo from "./loadAddTodo";
import loadInputOverlay from "./loadInputOverlay";
import loadTodos from "./loadTodos";

export default function editTodo(projectName,index){
    loadAddTodo()

    let projects = JSON.parse(localStorage.getItem('projects'));
    projects = projects
    document.getElementById('todoName').value=projects['projects'][projectName][index][0]
    document.getElementById('todoDescription').value=projects['projects'][projectName][index][1]
    document.getElementById('todoDate').value=projects['projects'][projectName][index][2]
    switch(projects['projects'][projectName][index][3]){
        case '3':
            document.getElementById('radio3').checked=true
            break
        case '2':
            document.getElementById('radio2').checked=true
            break
        case '1':
            document.getElementById('radio1').checked=true
            break
    }

    const btn=document.getElementById('btn')
    btn.onclick=function(){
        projects['projects'][projectName][index][0]= document.getElementById('todoName').value
        projects['projects'][projectName][index][1]= document.getElementById('todoDescription').value
        projects['projects'][projectName][index][2]= document.getElementById('todoDate').value
        projects['projects'][projectName][index][3]=((document.getElementById('radio3').checked)? '3' : (document.getElementById('radio2').checked)? '2' : '1')
        localStorage.setItem('projects', JSON.stringify(projects));
        deleteOverlay()
        loadTodos(projectName)
    }
}
