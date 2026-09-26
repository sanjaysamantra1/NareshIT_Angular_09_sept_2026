console.log('Program starts here...')

let user = { firsName: 'Virat', lastName: 'Kohli' };

console.log(user.firsName); // Virat
console.log(user.email);    // undefined
// console.log(user.address.city); // error
console.log(user?.address?.city);

console.log('Program continues execution...')
console.log('Program ends here...')