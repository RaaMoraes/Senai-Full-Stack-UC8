// Programa para cadastro de evento - Atividade Online 2 - UC8

let diaEvento, mesEvento, anoEvento, idadeParticipante;
let dataAtual = new Date();
let listaParticipantes = new Array(10);

//--------------------------------------------------------------------------------------
// Neste programa não será usada a requisição dados por meio do terminal
// As variáveis serão declaradas simulando as respostas do usuário
//--------------------------------------------------------------------------------------

// Pergunta ao usuário a data do evento e armazena em variáveis
//console.log("Seja bem vindo! Digite o dia que ocorrerá o seu evento: (apenas números)");
let cadastroDiaEvento = 31;

//console.log("Digite o mês que ocorrerá o seu evento: (apenas números)");
let cadastroMesEvento = 08;

//console.log("Digite o ano que ocorrerá o seu evento: (apenas números. 4 dígitos)");
let cadastroAnoEvento = 2021;

//--------------------------------------------------------------------------------------
// Teste para saber se a data informada é igual ou posterior a data atual

if(cadastroAnoEvento > dataAtual.getFullYear()){
    console.log("Data permitida! Cadastro realizado com sucesso!");
    //console.log("ano ok");
} else if((cadastroMesEvento > (dataAtual.getMonth() + 1)) & (cadastroAnoEvento >= dataAtual.getFullYear()) ){
    console.log("Data permitida! Cadastro realizado com sucesso!");
    //console.log("mes ok");
} else if((cadastroDiaEvento > dataAtual.getDate()) & (cadastroMesEvento >= (dataAtual.getMonth() + 1)) & (cadastroAnoEvento >= dataAtual.getFullYear())){
    console.log("Data permitida! Cadastro realizado com sucesso!");
    //console.log("dia ok");
} else {
    console.log("Falha no cadastro. A data informada deve ser posterior a data inicial!");
}

//--------------------------------------------------------------------------------------
//Teste para saber a idade do participante

console.log(listaParticipantes);