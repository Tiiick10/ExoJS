
let nombre = prompt("Entre un nombre :")

if (!isNaN(nombre)) {

    let num = parseInt(nombre, 10)

    switch (num % 2) {
        
        case 0:

            alert("Multiple de 2")
            break

        default:

            alert("N'est pas un multiple de 2")
    }

} else {
    
    alert("Ceci est un PAF !")
}