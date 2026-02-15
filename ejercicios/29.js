function numAsteriscos(arr) {
  let cont = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") cont++;
  }
  return cont;
}
//Pruebas
console.log(numAsteriscos(['', '*', '', '*']));
console.log(numAsteriscos(['*', '*', '*']));
console.log(numAsteriscos([]));
