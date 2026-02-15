function palabrasANumeros(arr) {
  let dic = {
    cero:0, uno:1, dos:2, tres:3, cuatro:4,
    cinco:5, seis:6, siete:7, ocho:8, nueve:9
  };

  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let palabra = arr[i].toLowerCase();
    res.push(dic[palabra] !== undefined ? dic[palabra] : -1);
  }
  return res;
}
//Pruebas
console.log(palabrasANumeros(["cero","uno","dos","tres","what?","cuatro"]));
console.log(palabrasANumeros(["cinco","seis","siete","ocho","nueve"]));
