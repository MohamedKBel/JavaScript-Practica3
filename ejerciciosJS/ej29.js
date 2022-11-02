function poligono4Lados (length, width) {
    if (length == width) {
        let area = length * width;
        console.log(`Esto es un cuadrado y su área es: ${area}`);
    } else {
        let perímetro = (length + width)*2;
        console.log(`Esto es un rectangulo y su perímetro es: ${perímetro}`);
    }
}
let base = Number(prompt("Dame el valor de la base de este poligono"))
let altura = Number(prompt("Dame el valor de la altura de este poligono"))

poligono4Lados(base, altura);