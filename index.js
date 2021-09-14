var minhaPromise = function(){
    return new Promise(function(resolve, reject){

        var xhr = new XMLHttpRequest(); //instanciando uma classe

        xhr.open('GET', 'https://api.github.com/users/jonnywilliampr');

        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Erro");
                }

            }
        }

    });
}

minhaPromise()
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.log(error);
})


// JSON.parse(); //transforma o texto JSON em um objeto.
// JSON.stringify(); //transformar um objeto em JavaScript em texto JSON.

// const parseJson = JSON.parse('{"id": 1,"nome": "Notebook Dell","modelo": "gamer","quantidade": 5}');
// console.log(parseJson);

// const object = {
//     Produto: "Caneta",
//     Tipo: "Esferográfica",
//     Quantidade: 1
// };

// const objectJson = JSON.stringify(object);

// console.log(objectJson);
