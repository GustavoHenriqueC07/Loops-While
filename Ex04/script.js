let nome = prompt("Digite o seu nome: ");

while(nome === "" || nome === null){
    nome = prompt("nome inválido, digite novamente");  
}

let sobrenome = prompt("Digite o seu sobrenome: ");

while(sobrenome === "" || sobrenome === null){
    sobrenome = prompt("Sobrenome inválido, Digite novamente");
}

alert("Seu nome inteiro é " + nome + " " + sobrenome);