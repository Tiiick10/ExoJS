// Prénom utilisateur

let prenom = prompt("Quel est ton prénom ?");

// Vérifie la longueur

// if (prenom.length < 5) {
//   alert("Ton nom est trop court")
// } 

// else {
//   alert("Ceci est un non")
// }

// Ternaire

let message = (prenom.length < 5) ? "Ton nom est trop court" : "Ceci est un nom"

alert(message)