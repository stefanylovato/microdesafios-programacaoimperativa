//método construtor - cria modelo do objeto
//sempre com primeira letra maiuscula
function Gato(nome, idade, sexo, cor){
    this.nome=nome;
    this.idade=idade;
    this.sexo=sexo;
    this.cor=cor;
}

//instanciar o objeto - criar uma cópia do objeto na memória
let gato1= new Gato('Tiffany', 11, 'fêmea', 'marrom');

let gato2= new Gato('Daphne', 11, 'fêmea', 'branca')

console.log(gato1.nome+' - '+gato2.nome);

let gato={
    nome: 'Tiffany e Daphne',
    idade: 11,
    sexo: 'fêmeas',
    cor: 'marrom e branca',}
