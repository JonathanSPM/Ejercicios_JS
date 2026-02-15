function multiplicarArreglo(arreglo) {
  if (arreglo.length === 0) return 1; 
  let total = 1;
  for (let i = 0; i < arreglo.length; i++) {
    total *= arreglo[i];
  }
  return total;
}

// Pruebas
console.log(multiplicarArreglo([4, 1, 2, 3])); // 24
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])); // 40320
console.log(multiplicarArreglo([])); // 1