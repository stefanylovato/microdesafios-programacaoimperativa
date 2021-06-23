//uma funcao invoca a ela mesma dentro do seu escopo, parece um loop (ciclo)
function recursividade(){
    //..
    recursividade()
    //..
}
//uma funcao recursiva sempre precisa ter uma condiçao que vai parar de invocar ela mesma para evitar loop infinito.
function recursividade(){
    if(condicao){
        //..
    } else{
        recursividade()
    }
}

function decrementar(numero){
    console.log(numero)
    numero-- //decrementa
    if(numero > 0){
        decrementar(numero)
    }
}
decrementar(3)