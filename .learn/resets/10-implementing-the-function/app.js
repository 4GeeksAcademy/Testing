// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToGBbp = function(valueInGbp){
    // convertimos el valor a dolares
    let valueInDollar = valueInGbp * 102.32;
    // retornamos el valor
    return valueInDollar;
}
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInYen){
    // convertimos el valor a dolares
    let valueInDollar = valueInYen * 153.48;
    // retornamos el valor
    return valueInDollar;
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToGBbp }