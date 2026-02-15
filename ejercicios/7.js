function contarRango(num1, num2){
  let cuenta = 0;
  for (let i = num1 + 1; i < num2; i++){
    cuenta++;
  }
  return cuenta;
}

// pruebas
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0
