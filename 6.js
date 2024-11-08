/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/

let carrinho = [];

carrinho.push("camiseta", "calça", "sapato");

carrinho.shift();

if (carrinho.length >= 2) {
    carrinho[1] = "tênis";
}

console.log("Carrinho de Compras Atualizado:");
carrinho.forEach(produto => {
    console.log(produto);
});