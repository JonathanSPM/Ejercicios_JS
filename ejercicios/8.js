function sumarRango(inicio, fin){
  let suma = 0;
  for (let i = inicio; i <= fin; i++){
    suma += i;
  }
  return suma;
}

// pruebas
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 5
