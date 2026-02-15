function numeroDeCaracteres(texto, caracter){
  let cuenta = 0;
  for (let i = 0; i < texto.length; i++){
    if (texto[i] === caracter){
      cuenta++;
    }
  }
  return cuenta;
}

// pruebas
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4
