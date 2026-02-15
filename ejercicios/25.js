function empiezanConA(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] && arr[i][0].toLowerCase() === "a") {
      res.push(arr[i]);
    }
  }
  return res;
}
//Pruebas
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]));
console.log(empiezanConA(["beta", "delta", "gama"]));
console.log(empiezanConA([]));