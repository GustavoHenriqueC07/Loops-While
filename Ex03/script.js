let valor=Number(prompt("Digite os valores das compras"));
let numero=0;

while (valor !== 0){
    numero += valor;

    valor=Number(prompt("Digite os valores das compras"));
}
alert("Seu todas juntas é: " + numero)