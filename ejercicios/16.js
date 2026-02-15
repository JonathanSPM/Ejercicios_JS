function capitalizar(texto) {
  if (texto === "") return "";
  
  return texto[0].toUpperCase() + texto.slice(1);
}

// Pruebas
console.log(capitalizar("pedro")); // "Pedro"
console.log(capitalizar("hola mundo")); // "Hola mundo"
console.log(capitalizar("")); // ""