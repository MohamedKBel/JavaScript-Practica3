function areaCirculo(r){
    return Math.floor(Math.PI * Math.pow(r, 2));
}
for(let radio = 1; radio <= 10; radio++){
    
    console.log(`El área del círculo con radio ${radio} es: ${areaCirculo(radio)}`);
}
