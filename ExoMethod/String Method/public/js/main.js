let phrase = "Bonjour tout le monde         "

// Exo 1

console.log(`${phrase} ${phrase.length}`)

// Exo 2 et 3

let phraseSansEspacesALaFin = phrase.replace(/\s+$/, '');
console.log(`${phraseSansEspacesALaFin} ${phraseSansEspacesALaFin.length}`)

// Exo 4

console.log(phraseSansEspacesALaFin.slice(-1))

// Exo 5

let result = phraseSansEspacesALaFin.substr(phraseSansEspacesALaFin.indexOf(" ") + 1)
console.log(result)

// Exo 6

let newPhrase = phraseSansEspacesALaFin.replace("Bonjour", "Yop")

console.log(newPhrase)

// Exo 7

let newPhrase1 = phraseSansEspacesALaFin.replace("Bonjour tout le monde", "Bonjour")

console.log(newPhrase1)

// Exo 8

let newPhrase2 = phraseSansEspacesALaFin.replace("Bonjour", "string")

console.log(newPhrase2)

// Exo 9

let x = Math.random() * 10

console.log(x)

// Exo 10

let resultat1 = phraseSansEspacesALaFin

    .split("")

    .map((char, index) => {

        if (index === 4 || index === 6) { 

            return char.toUpperCase()
        }

        return char.toLowerCase()
    })

    .join("")

console.log(resultat1)

// Exo 11

let mot = "Bonjour"

let firstOIndex = mot.indexOf("o")

let secondOIndex = mot.indexOf("o", firstOIndex + 1)

console.log("Position :", secondOIndex)

// Exo 12

let nom = "fabian"

let resultat3 = nom.charAt(0).toUpperCase() +

    nom.slice(1, -1) + 

    nom.charAt(nom.length - 1).toUpperCase()

console.log(resultat3)

