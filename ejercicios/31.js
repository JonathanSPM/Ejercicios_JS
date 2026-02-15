function distancia(a, b) {
let cont = 0;
let max = Math.max(a.length, b.length);

for (let i = 0; i < max; i++) {
    if (a[i] !== b[i]) cont++;
}
return cont;
}
//Pruebas
console.log(distancia("hola", "bola")); // 1
console.log(distancia("abc", "abd"));   // 1
