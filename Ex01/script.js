let numero = Number(prompt("ESCOLHA UM NÚMERO POSITIVO"));
let mensagem = ""

while(numero < 0){
    numero = Number(prompt("Número inválido, Escolha outro número:"));
}
alert("O seu número é " + numero);