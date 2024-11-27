let annee = parseInt(prompt("Saisissez une année pour savoir si elle est bissextile ou non (ex : 1956) :  "))

if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {

    console.log("Année bissextile")

} else {

    console.log("Cette année n'est pas bissextile")

}

