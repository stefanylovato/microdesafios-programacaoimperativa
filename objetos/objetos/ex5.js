let cachorro={
    nome: 'Mackenzie', 
    idade: 6, 
    sexo: 'fêmea', 
    cor: 'cinza', 
    imprimirComportamento: function() {return 'A '+cachorro.nome+' é muito brincalhona'} }

    //desestruturando
    let {nome, idade, sexo, cor, imprimirComportamento}=cachorro;
    console.log(idade);
    console.log(imprimirComportamento());
