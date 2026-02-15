function numeroDeAes(texto){
  let cuenta = 0;
  for (let i = 0; i < texto.length; i++){
    if (texto[i] === "a"){
      cuenta++;
    }
  }
  return cuenta;
}

// pruebas
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0
