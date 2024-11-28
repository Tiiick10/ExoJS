let prenomsClasse = ["adrian", "alexandre", "pauline", "jordan", "corentin", "fabian"]

for (let i = 0; i < prenomsClasse.length; i++) {

    let prenom = prenomsClasse[i]

    let prenomsModifie = prenom[0].toUpperCase() + prenom.slice(1, -1).toLowerCase() + prenom.slice(-1).toUpperCase()

    console.log(prenomsModifie)

}
