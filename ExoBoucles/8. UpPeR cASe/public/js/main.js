let phrase = "Bonjour à tous"

let resultat = ""

for (let i = 0; i < phrase.length; i++) {

    if (i % 2 === 0) {

        resultat += phrase[i].toUpperCase()

    } else {

        resultat += phrase[i].toLowerCase()

    }

}

console.log(resultat)