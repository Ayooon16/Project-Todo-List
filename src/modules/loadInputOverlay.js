import deleteOverlay from "./deleteOverlay"

export default function loadInputOverlay() {
    let overlay=document.createElement('div')
    overlay.id='overlay'
    overlay.className='overlay'
    let inputWindow=document.createElement('div')
inputWindow.id='inputWindow'
let form = document.createElement('div')
form.id='form'
const btn=document.createElement('button')
btn.innerHTML='Cancel'
btn.onclick=deleteOverlay
form.appendChild(btn)
inputWindow.appendChild(form)
overlay.appendChild(inputWindow)
document.body.appendChild(overlay)
}