/******************************************************
 * Objetivo: utilizar array com codigos e metodos
 * Autor: Dwovanna Santos
 * Data: 24/02/2023
 * Versão: 1.0
*****************************************************/

// [] - representa um objeto do tipo array
// {} - representa um objeto do tipo JSON0

const listaNomes = ['José','Maria', 'Luiz', 'Antonio', 'Ana', 'Carlos'];
const listaProdutos = ['Teclado', 'Mouse','Monitor', 'Gabinete', 'HH', 'Memoria'];

const exibindoDados = function(){
//Verifica o tipo de dados do elemento listaNomes
console.log(typeof(listaNomes));

//Verefica o tipo de dados dos itens do array
console.log(typeof(listaNomes[0]));

// Exibe o conteúdo de um indice
console.log(listaNomes[0]);

//Exibe todos os itens do array
console.log(listaNomes);

//table - permite vizualizar o conteudo do array em formato de tabela
console.table(listaNomes);

console.log('O nome do aluno é: ' + listaNomes[0]);
console.log(`O nome do aluno é: ${listaNomes[1]}`);

//lenght - retorna a quantidade de itens de um array
console.log(listaNomes.length);

//Pecorrendo um array com While
console.log('Exemplo com While')
let cont = 0;
let quantidadeItens = listaNomes.length; //Stop

while(cont < quantidadeItens) {
    console.log(`O nome do aluno é: ${listaNomes[cont]}`);
    cont +=1;
}

//Pecorrendo um array com FOR
console.log('Exemplo com FOR')
for(let cont = 0; cont < quantidadeItens; cont++);
    console.log(`O nome do aluno é: ${listaNomes[cont]}`);


//Pecorrendo um array com FOREACH
console.log('Exemplo com FOREACH')
listaNomes.forEach(function(nome){
    console.log(`O nome do aluno é: ${nome}`);
});
};

const manipulandoDados = function(){
    //push - adiciona novos itens no final do Array
    listaProdutos.push('Memoria');
    listaProdutos.push('WebCam', 'Gabinete', 'Fone');
    console.table(listaProdutos);

    //unsfhift
    listaProdutos.unshift('HD', 'Placa-Mãe', 'SSD');
    console.table(listaProdutos);

    //pop - remove o último item do Array, preservando os elementos anteriores
    listaProdutos.pop();
    console.table(listaProdutos);

    //shift - Remove o item do inicio do Array, reorganizando todos os elementos
    listaProdutos.shift();
    console.table(listaProdutos);
    
    // slice - Permite criar uma cópia de um array
    const novosProdutos = listaProdutos.slice();
    console.table(novosProdutos);

    //indexOf - Permite buscar dentro de um array um item
      // se o retorno for -1 o item não foi encontrado
        // se o retorno for maior ou igual a 0, o item foi encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('PC'));

    //Exemplo de utilização do indexOf
    if(listaProdutos.indexOf('PC') >= 0)
       console.log('Item encontrado');
    else
    console.log('Item não encontrado')

};

const removerProduto = function(nomeProduto) {
   let nome = nomeProduto;
   let indice = listaProdutos.indexOf(nome);
   let status;

   //splice - Permite apagar um ou mais itens de um array atraves de indice
     // se for encaminhado somente o indice ele ira apagar todos os itens 
     // para baixo
     // para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
   if(indice >= 0){
       listaProdutos.slice(indice, 1);
       status = true;
    } else{
        status = false
    }

    return status;

   
};

const removerItem = function(array, nomeItem) {
    //Entrada
    let nome = nomeItem;
    let novoArray = array.slice();
    let indice = novoArray.indexOf(nome);
    let status;

    // Processamento da Função 
    if(indice >=0) {
        novoArray.splice(indice, 1);
        status = true;
    }else{
        status = false;
    }
    //Saída 
    if(status)
       return novoArray;
    else 
    return false;
}



//manipulandoDados();
console.table(listaProdutos);
console.log(removerItem('Monitor'));
console.table(listaProdutos);
