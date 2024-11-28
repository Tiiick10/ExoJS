function chaineRaccourcie(chaine) {

    return chaine.length > 15 ? chaine.slice(0, 15) + '...' : chaine

  }
  
  
  let chaine = prompt("Entre une chaine de plus de 15 caractères et tu auras une surprise : ")
  
  let raccourci = chaineRaccourcie(chaine)

  alert(raccourci)