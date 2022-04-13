function position (firstPlace, secondPlace, lastPlace){
podio = [firstPlace, secondPlace, lastPlace]
    {
        if (podio[1] == "Daniel"){
        // Alterando colocação jogador Daniel
            podio.shift()
            podio.pop()
            podio.push(firstPlace)
            podio.push(lastPlace)
        // Imprimindo pódio
        console.log("Imprimindo Pódio: ")
            console.log(podio[0])
            console.log(podio[1])
            console.log(podio[2])
        }
        if (podio[2] == "Daniel"){
        // Alterando colocação jogador Daniel
            podio.pop()
            podio.pop()
            podio.push(lastPlace)
            podio.push(secondPlace)
        // Imprimindo pódio
        console.log("Imprimindo Pódio: ")
            console.log(podio[0])
            console.log(podio[1])
            console.log(podio[2])
        }
        else {
        console.log("Imprimindo Pódio: ")
        // Imprimindo pódio
            console.log(podio[0])
            console.log(podio[1])
            console.log(podio[2])
        }
    }
}

//Testes

/*
console.log("Teste 1: ")
console.log(position("Manuel", "Daniel", "Rafael"))
*/

/*
console.log("Teste 2: ")
console.log(position("Manuel", "Rafael", "Daniel"))
*/

/*
console.log("Teste 3: ")
console.log(position("Daniel", "Manuel", "Rafael"))
*/