function numerosAPalabras(arr) {
  let palabras = ["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve"];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(palabras[arr[i]]);
  }
  return res;
}
//Pruebas
console.log(numerosAPalabras([0,1,2,3,4]));
console.log(numerosAPalabras([5,6,7,8,9]));
