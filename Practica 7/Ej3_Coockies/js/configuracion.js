var guardar = document.getElementById('guardar')
var tamañoImg = document.getElementById('px')
var tabla = document.querySelectorAll("table")
var td = document.querySelectorAll("td")
var colorInput = document.getElementById('colorFondo')
var comproColor = document.getElementById('botonC')
//TABLA
for (x = 0; x<tabla.length;x++){
    tabla[x].style.marginTop='3%'
    tabla[x].style.width = "20%"
    tabla[x].style.height = "60px"
    tabla[x].style.border = '1px solid black'
    
    
}
//TD
for (x = 0; x<td.length;x++){
    td[x].style.border = '1px solid black'
}



comproColor.addEventListener('click',()=>{
    console.log(tamañoImg.value)
    for (x = 0; x<td.length;x++){
        td[x].style.backgroundColor = colorInput.value
        
    }
    
})

guardar.addEventListener('click',()=>{
    getCookie('color')
    setCookie('color',colorInput.value,1999)
    getCookie('tamaño')
    setCookie('tamaño',tamañoImg.value,1999)
    window.location.href='Ej3.html'
})

function setCookie(camp, valor, dies) {
    var d = new Date();
    console.log(valor)
    d.setTime(d.getTime() + (dies*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = camp + "=" + valor + ";" + expires; 
}

function getCookie(nom) {
    console.log(nom)
    
    var name = nom + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }           return "";  }