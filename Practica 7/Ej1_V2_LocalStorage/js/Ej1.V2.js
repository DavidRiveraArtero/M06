var visita = document.getElementById('numeroVisita')

window.addEventListener("load",()=>{
    
    let t = localStorage.getItem("numero")
    t = parseInt(t)
    t+=1
    localStorage.setItem("numero",t)
    visita.innerHTML=t
})

