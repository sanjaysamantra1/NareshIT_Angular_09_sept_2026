function demo1(a, b, c) {
    c = c ?? 5;  // assign 0 value only if c is undefined/null
    console.log(a, b, c);
}
demo1(10, 20);
demo1(10, 20, null);
demo1(10, 20, false);
demo1(10, 20, NaN);
demo1(10, 20, '');
demo1(10, 20, 0);
console.log(("============"))

function demo2(a, b, c) {
    c = c || 6;  // assign 6 if the value is any falsy value
    console.log(a, b, c);
}
demo2(10, 20);
demo2(10, 20, null);
demo2(10, 20, false);
demo2(10, 20, NaN);
demo2(10, 20, '');
demo2(10, 20, 0);