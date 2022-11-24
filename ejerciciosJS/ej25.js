let importeTotal = Number(prompt("¿Cual es el importe total de su cuenta?"));
let propina = 0;
let calidadServicio;
function tipCalculator (importeTotal, calidadServicio){
    if(typeof importeTotal === "number" && !isNaN(importeTotal)){
        calidadServicio = prompt("¿Que opcion representa mejor la calidad del servicio recibida: fatal, ok, bueno, excelente, normal?");
        calidadServicio = calidadServicio.toLowerCase ();
        switch (calidadServicio) {
            case "fatal":
                propina = (importeTotal * 5 ) / 100;
                console.log(`La propina segun la calidad del servicio es: ${propina}$`);
                break;
            case "ok":
                propina = (importeTotal * 15 ) / 100;
                console.log(`La propina segun la calidad del servicio es: ${propina}$`);
                break;    
            case "bueno":
                propina = (importeTotal * 20 ) / 100;
                console.log(`La propina segun la calidad del servicio es: ${propina}$`);
                break;
            case "excelente":
                propina = (importeTotal * 30 ) / 100;
                console.log(`La propina segun la calidad del servicio es: ${propina}$`);
                break;    
            default:
                propina = (importeTotal * 18 ) / 100;
                console.log(`La propina segun la calidad del servicio es: ${propina}$`);    
                break;
        }
    }else{
        console.log("Ingrese un valor numerico para calcular la propina segun la calidad del servicio")
    }
}