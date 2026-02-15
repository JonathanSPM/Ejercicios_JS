function sumarArreglo(arreglo, posInicial, posFinal) {
  let suma = 0;
  
  for (let i = posInicial; i <= posFinal; i++) {
    suma += arreglo[i];
  }
  return suma;
}

// Pruebas
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5 (suma 2 + 3)
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 7 (Solo el elemento en pos 0)