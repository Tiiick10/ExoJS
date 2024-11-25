// Bacs

let grandNombres = []
let petitNombres = []

// Boucle pour demander des chiffres

while (true) {
  let saisie = prompt("Entrez un chiffre (ou tapez 'stop' pour terminer) :")

  // Vérifie si l'utilisateur veut arrêter

  if (saisie.toLowerCase() === "stop") {
    break
  }

  // Convertit la saisie en nombre

  let nombre = parseFloat(saisie)

  // Vérifie si c'est un nombre valide

  if (!isNaN(nombre)) {
    
    if (nombre >= 12) {
      grandNombres.push(nombre)
    } 
    
    else {
      petitNombres.push(nombre)
    }
  } 
  
  else {
    alert("Veuillez entrer un chiffre valide !");
  }
}

// Affiche une alerte avec le contenu des deux bacs

alert(
  `Contenu :\nGrand nombres : ${grandNombres.join(", ")}\nPetit nombres : ${petitNombres.join(", ")}`
)
