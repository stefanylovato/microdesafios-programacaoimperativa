//objeto
let pessoa={
    //características do objeti, atributos
    //chave:valor
    //propriedades
    nome:'Silvia',
    sexo: 'f',
    usaAlianca: true,
    idade: 57,
    filhos: 3,
    //métodos (funçoes dentro de objetos)
    exibir: function(){
        let sexo=pessoa.sexo=='f' ? 'mulher' : 'homem'
        return 'Características do objeto:'+pessoa.nome.toLocaleUpperCase()+'\nGênero: '+sexo+'\nIdade: '+pessoa.idade
    }
}


console.log(pessoa.exibir())