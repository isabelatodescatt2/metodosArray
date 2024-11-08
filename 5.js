let filmesFavoritos = ["Filme1", "Filme2", "Filme3"];

filmesFavoritos[0] = "Novo Título";

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log("Filmes Favoritos:");
filmesFavoritos.forEach(filme => {
    console.log(filme);
});