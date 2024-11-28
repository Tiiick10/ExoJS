let donnees = [14, 7, 97, {}, "247", 67, 101, true, 34, 78, [], 'coding school', 0, 11, 32, "italie", 61, null, 'cent', 100]
let typeString = []
let typeNumber = []
let typeObject = []
let typeAutre = []

donnees.forEach(item => {

    if (typeof item === "string") {

        typeString.push(item)

    } else if (typeof item === "number") {

        typeNumber.push(item)

    } else if (typeof item === "object" && item !== null) {

        typeObject.push(item)

    } else {

        typeAutre.push(item)

    }
    
})

console.log("Strings:", typeString)
console.log("Nombres:", typeNumber)
console.log("Objets:", typeObject)
console.log("Autres:", typeAutre)