let saldo = Number(prompt("Quanto você tem no banco?"));
let saque;

while (saldo > 0) {
    saque = Number(prompt("Digite o valor que você deseja sacar: "));
    
    while ( saque <= 0 || saque > saldo ){

    saque = Number(prompt("Você não tem esse valor\n Insira um valor válido:"));
    }
saldo -= saque;

alert("Você sacou " + saque + "\nE restou " + saldo);
};