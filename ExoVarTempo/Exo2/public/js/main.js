let a = 1;
let b = 2;
let c = 3;
let d = 4;

// Variables temporaires

const tempA = a
a = d
d = c
c = b
b = tempA

console.log(a, b, c, d)
