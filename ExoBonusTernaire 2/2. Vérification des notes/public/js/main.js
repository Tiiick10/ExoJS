let examen = prompt("Entre ta moyenne d'examen et tu sauras si tu recevras une appréciation :")

let note = (examen >= 85) ? "Excellent" : (examen >= 65 && examen <= 84 ) ? "Bien" : (examen >= 50 && examen <= 64 ) ? "Passable" : "Echec"

alert(note)