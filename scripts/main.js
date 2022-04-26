// const miTitulo = document.querySelector('h1');
// miTitulo.textContent = '¡Hola mundo!';

// const parrafo = document.querySelector('p');
// parrafo.textContent = 'el universo colorido es una maravilla universal';

// function multiplica(num1,num2) {
//     let resultado = num1 * num2;
//     return resultado;
//   }

//   multiplica(5,3);
//   multiplica(2,3);
//   multiplica(9,3);

//   document.querySelector('html').onclick = function() {
//     alert('¡Ouch! ¡Deja de pincharme!');
// }

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/universo.jpg') {
      miImage.setAttribute('src','images/inf.jpg');
    } else {
      miImage.setAttribute('src', 'images/universo.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
  }

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Mozilla es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}