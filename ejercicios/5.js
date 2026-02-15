
function likes (numero){
    if(numero < 1000){
        return numero.toString()
     
    }else if(numero < 1000000){
        let result = numero / 1000;
        result = Math.floor(result);
        return result + "K";

    }else{
        let result2 = numero / 1000000
        result2 = Math.floor(result2);
        return result2 + "M"
    }
}
//pruebas
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"