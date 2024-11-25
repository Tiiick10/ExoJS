do {

    // Nombre mystère entre 1 et 20

    let nombreMystere = Math.floor(Math.random() * 20) + 1
  
    // Initialise les tentatives
    
    let tentativesRestantes = 5
    let aGagne = false
  
    // Démarre le jeu

    while (tentativesRestantes > 0) {

      let reponse = parseInt(prompt(`Devine le nombre mystère (entre 1 et 20) :`), 10)
  
      if (isNaN(reponse)) {

        alert("Veuillez entrer un nombre valide.")

        continue
      }
  
      if (reponse === nombreMystere) {

        alert(`Bravo ! Tu as trouvé le nombre mystère : ${nombreMystere}. 🎉`)

        aGagne = true

        break
      } 
      
      else if (reponse < nombreMystere) {

        alert("Trop petit !")
      } 
      
      else {

        alert("Trop grand !")
      }
  
      tentativesRestantes--
  
      if (tentativesRestantes > 0) {

        alert(`Il te reste ${tentativesRestantes} tentative(s).`)
      } 
      
      else {
        alert(`Dommage ! Tu as perdu. Le nombre mystère était ${nombreMystere}. 😢`)
      }
    }
  
    // Rejouer

    var rejouer = confirm("Veux-tu rejouer ?")
  
  } while (rejouer)
  
  alert("Merci d'avoir joué ! À bientôt. 👋")
  