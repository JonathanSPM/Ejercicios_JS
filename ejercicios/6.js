function fizzBuzz(numero){
    if(numero % 3 === 0 && numero % 5 === 0){
        return "fizzBuzz"
    }
    if(numero % 3 === 0){
        return "fizz";
    }else if (numero % 5 === 0){
        return "buzz";
    }else{
        return numero.toString();
    }
        
}


//pruebas
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8