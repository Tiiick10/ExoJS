let devineNote = prompt("Entre ta moeyenne d'examen et tu recevras ta note finale :")

let note = (devineNote >= 90) ? "A" : (devineNote >= 80 && devineNote <= 89 ) ? "B" : "C"

alert(note)

// let gradeA = Math.min(Math.max(parseInt(number), 90), 100)
// let gradeB = Math.min(Math.max(parseInt(number), 80), 89)