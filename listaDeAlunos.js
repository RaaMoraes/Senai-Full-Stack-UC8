// Lista de alunos. Requisitos:
// - Mostrar se o número do aluno é impar ou par
// - Se for zero escrever na tela
// 

let listaDeAlunos = ["Maria", "João", "Rodrigo", "Paulo", "Ana"];


// Usando o comando FOR

for (let i = 0; i < listaDeAlunos.length; i++) {
    if(i==0){
        console.log("Aluno número ZERO: " + listaDeAlunos[i]);
    } else if (i%2 == 0){
        console.log("Aluno de número "+ i +" (PAR): " + listaDeAlunos[i]);
    } else{
        console.log("Aluno de número "+ i +" (ÍMPAR): " + listaDeAlunos[i]);
    }

}

//--------------------------------------------------------------
// Usando o comando WHILE
// let contador = 0;

// while (contador < 5){
    
//     if(contador==0){
//         console.log("Aluno número ZERO: " + listaDeAlunos[contador]);
//     } else if (contador%2 == 0){
//         console.log("Aluno de número "+ contador +" (PAR): " + listaDeAlunos[contador]);
//     } else{
//         console.log("Aluno de número "+ contador +" (ÍMPAR): " + listaDeAlunos[contador]);
//     }

//     contador++;
// }

//--------------------------------------------------------------
// Usando o comando .forEach

// listaDeAlunos.forEach((aluno,index) => {
//     if(index==0){
//         console.log("Aluno número ZERO: " + listaDeAlunos[index]);
//     } else if (index%2 == 0){
//         console.log("Aluno de número "+ index +" (PAR): " + listaDeAlunos[index]);
//     } else{
//         console.log("Aluno de número "+ index +" (ÍMPAR): " + listaDeAlunos[index]);
//     } 
// });