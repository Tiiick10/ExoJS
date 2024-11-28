let posNegNul = prompt("Vérifions si ton nombre est Positif, Négatif ou Nul :")

let nombre = (posNegNul > 0) ? "Positif" : (posNegNul < 0 ) ? "Négatif" : "Nul"

alert(nombre)