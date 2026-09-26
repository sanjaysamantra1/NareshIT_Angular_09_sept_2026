import addition, { sub, mul } from './math.js' // static import 

addition(10, 20)
sub(10, 20)
mul(10, 20)

function f1() {
    import('./math.js').then(module => {  // Dynamic import
        module.addition(10, 20)
    })
}
f1();