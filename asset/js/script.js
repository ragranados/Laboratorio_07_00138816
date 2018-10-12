/*window.addEventListener('load',() =>{
    let box = document.querySelectorAll(".box");
    console.log(box);
});*/

var container = document.getElementById("c1");
container.innerHTML = "La dama de la fortuna me sonrie";
container.style.background = "#000";
container.style.color = "#1cb723";
container.style.width = "200px";
container.style.height = "200px";
container.innerHTML = "<input type=”text” placeholder='escriba su texto'>";

var containers = document.getElementsByClassName("c2");
console.log(containers);

containersIterable = document.querySelectorAll(".c2");

containersIterable.forEach(element => {
    element.style.background = "#009999";
    element.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
});

var boton = document.getElementById("btn-click");

boton.onclick = function (evt) {
    alert("Hola mundo, ella no te ama");
}

var btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function (evt) {
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}

/*
1. La varieble container tiene todo el elemento HTML que tiene ese id.

2. Aparece en el primer cuadro un text.

3.  1- Aparece en el cuadro negro un cuadro de input
    2- La propiedad innerHTML le agrega un elemento al elemento HTML y la propiedad inner text le agrega contenido al texto.

1. La variable containers almace una coleccion de los 6 elemntos que tienen esa clase.

2. Se muestra error, pero al seleccionarlo con querySelectorAll, si se hace un elemetno iterable

3.  1- Aparece un input en cada cuadro.
    2- innerHTML le agrega un elemento al elemento pero no en el DOM y text agrega contenido al texto.

1.  1- Lo que hace es que el texto que esta en el input lo pone en un cuadro adelante
    2- Uno es el valor que tiene el input, que vendria siento el texto que esta en el input, y el inner le cambiar solo el contenido del 
    texto.
*/