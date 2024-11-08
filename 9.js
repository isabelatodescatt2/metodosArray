/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/

let metasSemana = [];

metasSemana.push("meta1", "meta2", "meta3");

if (metasSemana.length >= 2 && metasSemana[1] !== "exercício físico") {
    metasSemana[1] = "praticar esportes";
}

console.log("Metas Semanais:");
metasSemana.forEach(meta => {
    console.log(meta);
});