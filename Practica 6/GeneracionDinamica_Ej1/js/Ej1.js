var body = document.querySelector('body')
body.style.backgroundColor='lightgray' //COLOR DE FONDO

//CREAR UN DIV QUE DENTRO DE ESTE ESTARA EL LABEL, INPUT, BUTTON
var mensajeria = document.createElement('div')

//CENTRAR EL CONTENIDO DE MENSAJERIA EN EL CENTRO
mensajeria.style.width='17%'
mensajeria.style.margin='0% auto'
mensajeria.style.marginBottom='3%'
body.appendChild(mensajeria)
//CREAMOS EL LABEL Y LO ANCLAMOS AL DIV
var label = document.createElement('label');
mensajeria.appendChild(label)
//TEXTO AL LABEL
label.innerHTML='Mensaje'

//CREAR EL ELEMENTO IMPUT
var input = document.createElement('input')
label.appendChild(input)
input.style.marginLeft='1%'

//CREAR EL ELEMENTO BOTON
var boton = document.createElement('button');
mensajeria.appendChild(boton)
boton.innerText='Enviar'

//CREAMOS EL DIV
var div = document.createElement('div');
body.appendChild(div)
div.style.width='20%'
div.style.height='auto'
div.style.margin='0% auto'


//CREAMOS LA TABLA DONDE ESTARA LOS CONTENIDOS
var table = document.createElement('table')
div.appendChild(table);
table.style.width='100%'

//AL CLICAR AL BOTON ENVIAR SE PASARAN TODOS LOS DATOS
boton.addEventListener('click',event =>{
    //BORDE A LA TABLA
    table.style.border='1px solid black'

    //FUNCION DATE
    var feche = new Date()
    var eliminar = document.createElement('button')

    //CONTENIDO DEL BOTON ELIMINAR
    eliminar.innerHTML='Eliminar'
    var tr = document.createElement('tr')
    table.appendChild(tr);

    //CAMBIAR 
    var tdDay = document.createElement('td')
    var tdEsdeveniment = document.createElement('td')
    var tdBoton = document.createElement('td')
    tr.appendChild(tdDay);
    tr.appendChild(tdEsdeveniment)
    tr.appendChild(tdBoton)
    tdBoton.appendChild(eliminar)
    //ESTILOS DE LOS TD
    tdBoton.style.border='1px solid black'//BORDE
    tdBoton.style.textAlign='center'//CENTRAR CONTENIDo
    tdDay.style.border='1px solid black'//BORDE
    tdDay.style.textAlign='center'//CENTRAR CONTENIDO
    tdEsdeveniment.style.border='1px solid black'//BORDE
    tdEsdeveniment.style.textAlign='center'//CENTRAR CONTENIDO

    //VALOR DE LOS TD
    tdEsdeveniment.innerText=input.value
    tdDay.innerText=feche.getUTCDate()+"/"+(feche.getMonth()+1)+"/"+feche.getFullYear()

    //BOTON ELIMINAR CONTENIDO
    eliminar.addEventListener('click',event =>{
        //ELIMINO EL PADRE DEL PADRE QUE EN ESTE CASO SERIA EL TR
        event.target.parentNode.parentNode.remove()
    })
    
})

