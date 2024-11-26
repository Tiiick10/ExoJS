
let jour = prompt("Entrez un jour de la semaine :")

switch (jour.toLowerCase()) {

    case "lundi":
        console.log("On est lundi. Tu as cours à MolenGeek et tu as du sport en soirée.")
        break

    case "mardi":
        console.log("On est mardi. Tu travailles sur tes projets.")
        break

    case "mercredi":
        console.log("On est mercredi. Tu as une réunion et une sortie prévue.")
        break

    case "jeudi":
        console.log("On est jeudi. Tu fais des recherches et étudies.")
        break

    case "vendredi":
        console.log("On est vendredi. Tu prépares tes affaires pour le week-end.")
        break

    case "samedi":
        console.log("On est samedi. Tu te détends et sors avec des amis.")
        break

    case "dimanche":
        console.log("On est dimanche. Tu te reposes et prépares la semaine à venir.")
        break
        
    default:
        console.log("Jour non valide.")
}