let arr = [10, 20, 30, 40, 10, 10, 10, 40];

let uniqueSet = new Set(arr);
console.log(uniqueSet);

let uniqueArr = [...uniqueSet];
console.log(uniqueArr)