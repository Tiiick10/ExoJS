// Génère deux nombres aléatoires entre 1 et 10

let nombre1 = Math.floor(Math.random() * 10) + 1
let nombre2 = Math.floor(Math.random() * 10) + 1

// Calcule le produit

let produitCorrect = nombre1 * nombre2

// Résoudre la multiplication

let reponse = parseInt(prompt(`Combien fait ${nombre1} × ${nombre2} ?`), 10)

// Vérifie si la réponse est correcte

if (reponse === produitCorrect) {
  alert(`Bien ouej c'est ${produitCorrect}.`)
} 

else {
  alert(`T'es nul(le) wallah c'était ${produitCorrect}.`)
}


