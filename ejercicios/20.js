function password(str) {
  
  let nuevoStr = str.toLowerCase().replace(/ /g, ""); 
  let resultado = "";

 
  for (let i = 0; i < nuevoStr.length; i++) {
    let char = nuevoStr[i];
    if (char === 'a') { resultado += '4'; }
    else if (char === 'e') { resultado += '3'; }
    else if (char === 'i') { resultado += '1'; }
    else if (char === 'o') { resultado += '0'; }
    else { resultado += char; }
  }
  return resultado;
}

// Pruebas
console.log(password("hola")); // "h014"
console.log(password("esta es una prueba")); // "3st43sun4pru3b4"
console.log(password("")); // ""