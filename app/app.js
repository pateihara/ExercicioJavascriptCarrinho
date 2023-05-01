let carrinho = []
let controle ="1"
let totalCompra =0

while (controle == "1") {
    controle = prompt("Você gostaria de adicionar mais produtos? Digite 1 para sim e 2 para não")
    if (controle == "1") {
        let nome = prompt("qual o produto?")
        let quantidade = prompt("qual a quantidade?")
        let preco = prompt("qual o preco?")
        let total = preco * quantidade

        let produto = {
            nome, quantidade, preco, total
        }
        carrinho.push(produto)
    }else{
        controle = 0
    }
}

for (let i = 0; i < carrinho.length; i++) {
    console.log(`Nome: ${carrinho[i].nome}`);
    console.log(`Preco: ${carrinho[i].preco}`);
    console.log(`Quantidade: ${carrinho[i].quantidade}`);
    console.log(`Total: ${carrinho[i].total}`);
    console.log(`--------------------------`);
    totalCompra += carrinho[i].total;
}
console.log(`Total: ${totalCompra}`);