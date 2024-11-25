let tableau = [1, 2, 3, 4];

// Variables Temporaires

const temp = tableau[0]
tableau[0] = tableau[3]
tableau[3] = temp

const temp2 = tableau[1]
tableau[1] = tableau[2]
tableau[2] = temp2

console.log(tableau)




// Reverse

// let tableau = [1, 2, 3, 4]
// tableau.reverse()
// console.log(tableau)
