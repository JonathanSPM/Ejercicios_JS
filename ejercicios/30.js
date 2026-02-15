function numAsteriscos(matriz) {
  let cont = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] === "*") cont++;
    }
  }
  return cont;
}
//Pruebas
console.log(numAsteriscos([
  ['*','', '*'],
  ['', '*',''],
  ['*','', '*']
]));
