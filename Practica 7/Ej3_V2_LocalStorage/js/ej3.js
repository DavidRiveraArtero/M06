var botonConf = document.getElementById('configuracion');
var colorFondo = document.querySelector('body')
var imagen = document.querySelector('img')

botonConf.addEventListener('click',()=>{
    window.location.href='configuracion.html'
})

var dat = JSON.parse(localStorage.getItem("datos"));

claves = Object.values(dat)
console.log(claves[1])
colorFondo.style.backgroundColor=claves[0];
imagen.style.border=claves[1]+" solid red"