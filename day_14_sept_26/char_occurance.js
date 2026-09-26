let str = 'entertainment';

// char occurance using object
let obj = {}
for (char of str) {
    if (obj[char]) {
        obj[char] = obj[char] + 1
    } else {
        obj[char] = 1;
    }
}
console.log(obj)


// char occurance using Map()
let charMap = new Map()
for (char of str) {
    if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1)
    } else {
        charMap.set(char, 1)
    }
}
console.log(charMap)