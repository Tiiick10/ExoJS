
let meteo = prompt("Entrez un type de météo (soleil, pluie, neige, vent) :")

switch (meteo.toLowerCase()) {

    case "soleil":
        alert("Il fait booooOOOOOoooooOOO !")
        break

    case "pluie":
        alert("Il pleudre. Prends un par la pluie")
        break

    case "neige":
        alert("Il NEEEEEIIIIIIIIIGE !!! Prends ton traineau jeune lutin du Père Noel")
        break

    case "vent":
        alert("Il y a du vent ! (bruit de vent)")
        break

    default:
        alert("Ceci est un NON !")
}
