let carSet = new Set();

// add items to set
carSet.add('Tata')
carSet.add('Maruti')
carSet.add('Honda')
carSet.add('Maruti')
carSet.add('Tata')
carSet.add('Maruti')
console.log(carSet)

console.log(carSet.size); // 3

// Check if a value is present?
console.log('is Tata Present? ', carSet.has('Tata'))
console.log('is Tata Present? ', carSet.has('Hyundai'))

// delete
carSet.delete('Honda')