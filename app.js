let selectedIcon=""
let selectedMemory=null

const iconSelector=document.getElementById("iconSelector")
const iconMenu=document.getElementById("iconMenu")
const previewIcon=document.getElementById("previewIcon")
const iconPlus=document.getElementById("iconPlus")

iconSelector.onclick=(e)=>{

e.stopPropagation()
iconMenu.classList.toggle("hidden")

}

document.querySelectorAll("#iconMenu img,#iconMenu div").forEach(el=>{

el.onclick=()=>{

selectedIcon=el.dataset.icon||""

if(selectedIcon){

previewIcon.src="icons/"+selectedIcon
previewIcon.classList.remove("hidden")
iconPlus.style.display="none"

}else{

previewIcon.classList.add("hidden")
iconPlus.style.display="block"

}

iconMenu.classList.add("hidden")

}

})

window.onclick=(e)=>{

if(e.target.id==="modal"){

modal.classList.add("hidden")

}

iconMenu.classList.add("hidden")

}

document.getElementById("tipoTe").onchange=()=>{

if(tipoTe.value==="manual"){

ratioManual.classList.remove("hidden")

}else{

ratioManual.classList.add("hidden")

}

}

let deferredPrompt

window.addEventListener("beforeinstallprompt",(e)=>{

e.preventDefault()
deferredPrompt=e

const banner=document.getElementById("installBanner")

banner.innerHTML="Instalar app"

banner.classList.remove("hidden")

banner.onclick=()=>{

deferredPrompt.prompt()

}

})

function detectIOS(){

return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())

}

if(detectIOS() && !window.navigator.standalone){

const banner=document.getElementById("installBanner")

banner.innerHTML="Compartir → Agregar a inicio"

banner.classList.remove("hidden")

}
