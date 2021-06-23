const soma = (num1, num2) => {
    return num1+num2
}

module.exports.soma = soma

const subtracao = (num1, num2) =>{
    return num1-num2
}
const operacoes = {
    soma:soma,
    subtracao: subtracao
}
module.exports=operacoes
console.log(operacoes.soma)
//module.exports.subtracao = subtracao