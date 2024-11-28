let contenuAge = prompt("Entre ton âge pour accéder au site :")

let acces = (contenuAge < 13) ? "Accès refusé" : (contenuAge >= 13 && contenuAge <= 17 ) ? "Accès limité" : "Accès complet"

alert(acces)