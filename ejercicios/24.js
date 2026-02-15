function duplicar(arr) {
  let nuevo = [];
  for (let i = 0; i < arr.length; i++) {
    nuevo.push(arr[i] * 2);
  }
  return nuevo;
}
//Pruebas
console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));
