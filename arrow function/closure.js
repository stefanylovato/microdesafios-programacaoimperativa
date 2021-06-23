function saudacaoPersonalizada(nome){
    let saudacaoGenerica = 'Olá'; //variável local com uma string
    function saudar(){
        return saudacaoGenerica + ' ' + nome;
    }
    return saudar() //a chamada para a execuçao da closure sempre deve ser feita dentro de sua funcao de container
}

console.log(saudacaoPersonalizada("Felipe")) //para visualizar



function pai(){
    function filha(){
        //fazer passo 1
        //fazer passo 2
        //fazer passo 3
        //etc
    }
    return filha();
}

//uma closure pode usar todos os parâmetros e variáveis que o pai() está recebendo
function pai(param1, param2){
    let umaVariavel = "Olá";
    function filha(){
        return umaVariavel + param1 + param2;
    }
    return filha()
}