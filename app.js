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