// JSON.parse(); //transforma o texto JSON em um objeto.
// JSON.stringify(); //transformar um objeto em JavaScript em texto JSON.

const parseJson = JSON.parse('{"id": 1,"nome": "Notebook Dell","modelo": "gamer","quantidade": 5}');
console.log(parseJson);

const object = {
    Produto: "Caneta",
    Tipo: "Esferográfica",
    Quantidade: 1
};

const objectJson = JSON.stringify(object);

console.log(objectJson);