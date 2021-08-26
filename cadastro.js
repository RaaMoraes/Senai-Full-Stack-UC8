const listaDePecas = ["peça1", "pe2", "", "asd", "Motor", "lke", "Molas", "Alternador", "aa", "Volante"]
const listaPeso = [150, 200, 50, 1561, 60, 1814, 65456, 555, 20, 0]
const pesoMinimo = 100

//console.log(listaDePecas)

//checar se tem espaço para cadastrar a peça - 10 peças
if (listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças!")
} else {
    console.log("Lista cheia, não é possível acrescentar mais peças!")
}

console.log("\n ----------------------------- \n")

//checar se o nome é válido para cadastro - mais de 3 caracteres
for (i = 0; i < 10; i++) {
    if (listaDePecas[i].length == 0) {
        console.log("Peça " + (i + 1) + ": Nome inválido, não possui caracteres!")
    } else if (listaDePecas[i].length > 3) {
        console.log("Peça " + (i + 1) + ": Nome aprovado!")
    } else {
        console.log("Peça " + (i + 1) + ": Nome inválido! O nome de cadastro deve possuir mais de 3 letras!")
    }
}

console.log("\n ----------------------------- \n")

//checar se a peça possui mais de 100g
for (i = 0; i < 10; i++) {
    if (listaPeso[i] > pesoMinimo) {
        console.log("Peça " + (i + 1) + ": Peso da peça é válido!")
    } else {
        console.log("Peça " + (i + 1) + ": Peso inválido! A peça deve ter mais de 100g")
    }
}
//console.log(listaDePecas[0].length)



