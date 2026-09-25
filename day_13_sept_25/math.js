export default function add(a, b) { // default export
    console.log(`Addition of ${a} and ${b} is ${a + b}`)
}
export function sub(a, b) { // named export
    console.log(`Subtraction of ${a} and ${b} is ${a - b}`)
}
export function mul(a, b) {
    console.log(`Multiplication of ${a} and ${b} is ${a * b}`)
}

// A module can have 2 type of exports , 1. named export  2. default export