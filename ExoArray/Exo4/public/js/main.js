// Création

let monArray = ["coding 20", "coding 21", "coding 22"]
let monArray1 = ["coding 20", "coding 21", "coding 22"]

// Affichage

console.log("Éléments du tableau: ", monArray1)

// Ajout de prénom

let prenom = "Fab"
monArray.push(prenom)

// Affichage après ajout

console.log("Tableau après ajout de prénom : ", monArray)

// Remplacement

monArray[1] = "coding 99"

// Affichage après remplacement

console.log("Tableau après remplacement : ", monArray)

// Effacer un élément (supprimer l'élément à l'index 0)

monArray.splice(0, 1)

// Affichage après suppression

console.log("Tableau après suppression : ", monArray)

// Affichage final

console.log("Tableau final : ", monArray)
