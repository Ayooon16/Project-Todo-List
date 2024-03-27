export default function loadInputOverlay() {
    let overlay=document.createElement('div')
    overlay.id='overlay'
    overlay.className='overlay'
    let inputWindow=document.createElement('div')
inputWindow.id='inputWindow'
let form = document.createElement('div')
form.id='form'
inputWindow.appendChild(form)
overlay.appendChild(inputWindow)
document.body.appendChild(overlay)
console.log('asd')
}