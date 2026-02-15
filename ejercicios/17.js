function capitalizar(texto) {
  if (texto === "") return "";
  let palabras = texto.split(" "); 
  for (let i = 0; i < palabras.length; i++) {
   
    palabras[i] = palabras[i][0].toUpperCase() + palabras[i].slice(1);
  }
  return palabras.join(" ");
}

// Pruebas
console.log(capitalizar("hola mundo")); // "Hola Mundo"
console.log(capitalizar("make it real")); // "Make It Real"