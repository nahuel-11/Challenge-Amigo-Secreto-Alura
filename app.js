let listaAmigoss = [];

function agregarAmigo() {
  let amigos = document.getElementById("amigo").value.trim();

  // Validar que el nombre no sea un número y que no esté vacío
  if (amigos === "") {
    alert("Debe agregar un nombre válido");
  } else if (!isNaN(amigos)) {
    alert("El nombre no puede ser un número");
  } else {
    listaAmigoss.push(amigos);
  }
  mostrarListaAmigos(listaAmigoss);
}

function mostrarListaAmigos(ulAmigos) {
  let elemetoHTML = document.getElementById("listaAmigos");
  elemetoHTML.innerHTML = "";
  let nombres = ulAmigos.join(", ");
  elemetoHTML.textContent = nombres;
}

function sortearAmigo() {
  if (listaAmigoss.length === 0) {
    alert("Debe agregar un amigo antes de sortear");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigoss.length);
  let amigoSeleccionado = listaAmigoss[indiceAleatorio];
  mostrarResultado(amigoSeleccionado);
}

function mostrarResultado(amigo) {
  let resultadoHTML = document.getElementById("listaAmigos");
  resultadoHTML.innerHTML = `<li>El amigo secreto es: ${amigo}</li>`;
}
