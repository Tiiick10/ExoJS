let sommes = [14, 7, 97, 65, 247, 67, 101, 4, 34, 78, 1, 900, 0, 11, 32, 23, 61]
let grossesSommes = []

for (let i = 0; i < sommes.length; i++) {

    if (sommes[i] > 60) {

        grossesSommes.push(sommes[i])

        sommes.splice(i, 1)

        i--

    }

}

console.log("Grosses sommes:", grossesSommes)

console.log("Sommes:", sommes)
