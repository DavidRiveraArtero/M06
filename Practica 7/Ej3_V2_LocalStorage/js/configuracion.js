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
    var datos = {
        color : colorInput.value,
        tamaño : tamañoImg.value
    };

    localStorage.setItem("datos",JSON.stringify(datos))

    window.location.href='Ej3.html'
})

