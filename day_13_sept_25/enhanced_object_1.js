function makeLaptop(brand, model, price) {
    // es_5
    return {
        brand: brand,
        model: model,
        price: price
    }
}
console.log((makeLaptop('HP', 'Probook', 55000)));


function createLaptop(brand, model, price) {
    // es_6
    return { brand, model, price }
}
console.log((createLaptop('HP', 'Probook', 55000)));