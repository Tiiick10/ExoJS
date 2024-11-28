let prenoms = ["Adrian", "Alexandre", "Pauline", "Jordan", "Corentin", "Fabian"]
let longPrenoms = []

for(let i = 0; i < prenoms.length; i++) {

    if (prenoms[i].length > 7) {

        longPrenoms.push(prenoms[i])

    }
}

console.log("Prénoms longs:", longPrenoms)