setTimeout( function(){
    console.log('Olá mundo!')
}, 1000)

//tbm pode ser uma funçao previamente definida
let minhaCallback = () => console.log('Olá mundo!');
setTimeout(minhaCallback, 1000)

//definimos uma funcao nomeCompleto() que se encarrega de juntar um nome e um
//sobrenome com um espaço. ela nos retorna uma string
function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}
//definimos a funcao bomDia() que recebe nome, sobrenome e callback. A callback
//será a funçao que iremos executar internamente
function bomDia(nome, sobrenome,callback){
    return 'Olá, ' + callback(nome, sobrenome);
}
console.log(bomDia('Amanda', 'Ferreira', nomeCompleto))

function iniciais(nome, sobrenome){
    return nome[0] + sobrenome[0];
}

console.log(bomDia('Fernado','Abreu', iniciais))