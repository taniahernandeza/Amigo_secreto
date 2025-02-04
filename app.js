// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.
let listaDeNombres = [];

function agregarAmigo(){
    let nombreUsuario = document.getElementById('amigo').value;
    if (esNombreValido(nombreUsuario)) {
      // Comprobamos si el nombre ya existe en la lista y eliminamos diferencia entre mayúsculas y minúsculas
      if (listaDeNombres.some(nombre => nombre.toLowerCase() === nombreUsuario.toLowerCase())) {
        alert("Este nombre ya fue agregado.");
      } else {
          listaDeNombres.push(nombreUsuario);
          console.log("Nombre agregado:", nombreUsuario);
      }
  } else {
      alert("Por favor, ingrese un nombre válido. Solo se permiten letras y espacios.");
  }

  console.log(listaDeNombres);
  limpiarCaja();
}

//Limpiamos la caja para poder escribir otro nombre
function limpiarCaja(){
    document.querySelector('#amigo').value ='';
    return;
}

//Verificamos que el nombre ingresado sea válido
function esNombreValido(nombreUsuario) {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(nombreUsuario);
}

//Generamos un nombre aleatorio para que sea el amigo secreto
function sortearAmigo() {
  let nombreAleatorio = Math.floor(Math.random() * listaDeNombres.length);
  let nombreSeleccionado = listaDeNombres[nombreAleatorio];
  
  if (listaDeNombres.length === 0) {
      alert("No hay nombres en la lista.");
      return;
  }
  
  console.log("Nombre seleccionado aleatoriamente:", nombreSeleccionado);
  alert(`Su amigo secreto es: ${nombreSeleccionado}`)
}