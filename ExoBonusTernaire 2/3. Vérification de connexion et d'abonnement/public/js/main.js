let connexion = prompt("Êtes - vous connecter ? ")
let abonnement = prompt("Êtes - vous abonner ? ")

let connect = (connexion === "non") ? "Veuillez vous connecter" : (connexion === "oui" && abonnement === "non") ? "Abonnez-vous pour accéder au contenu" : "Bienvenue sur la plateforme"

alert(connect)
