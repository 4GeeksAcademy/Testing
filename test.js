// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollars should be 153.48 Yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen (3.5)).toBe(537.18); //1 dolar son 153.48 yen, entonces 3.5 dolares deberian ser = (3.5 * 153.48)
})

test("One GBP should be 102.32 Yen", function(){
    // importo la funcion desde app.js
    const { fromYenToGBbp } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect( fromYenToGBbp (3.5)).toBe(358.12); //1 GBP son 102.32 yen, entonces 3.5 GBP deberian ser = (3.5 * 102.32)
})