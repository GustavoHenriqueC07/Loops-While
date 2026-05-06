let nota = 0;
let quantidade = 0;
let soma = 0;

while(true){
    nota = Number(prompt("Digite suas Notas\n Quando acabar digite qualquer número negativo."));
    if(nota < 0){
    break
}soma += nota;
    quantidade ++;
}
let media = soma/quantidade;
alert("Média:" + media);