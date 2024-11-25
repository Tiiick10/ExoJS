let a = 1
let b = 2
let c = 3
let d = 4

// Variables temporaires

const tempA = a
a = b
b = c
c = d
d = tempA

console.log(a, b, c, d)