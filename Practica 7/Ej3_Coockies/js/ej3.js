var botonConf = document.getElementById('configuracion');
var colorFondo = document.querySelector('body')
var imagen = document.querySelector('img')

botonConf.addEventListener('click',()=>{
    window.location.href='configuracion.html'
})
function getCookie(nom) {
    console.log(nom)
    
    var name = nom + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }           return "";  
}

var colorF = getCookie('color')
var tamañoImg = getCookie('tamaño')
console.log(tamañoImg)
colorFondo.style.backgroundColor=colorF
imagen.style.border=tamañoImg+" solid red"