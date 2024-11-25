// Nombres aléatoires entre 1 et 10

let nombre1 = Math.floor(Math.random() * 10) + 1
let nombre2 = Math.floor(Math.random() * 10) + 1

// Calcule la somme

let sommeCorrecte = nombre1 + nombre2

// Demande de résoudre l'addition

let reponse = parseInt(prompt(`Combien fait ${nombre1} + ${nombre2} ?`), 10)

// Vérifie si la réponse est correcte

if (reponse === sommeCorrecte) {
  alert("Bien ouej")
} 

else {
  alert(`T'es nul(le) wallah c'était ${sommeCorrecte}.`)
}
