function esPar(num) {
    if ((num%2) == 0) {
        return console.log(`El numero ${num} es par.`);
    } else {
        return console.log(`El numero ${num} es impar.`);
    } 
}


esPar(Number(prompt("Introduce un numero y te dire si es par o impar")));