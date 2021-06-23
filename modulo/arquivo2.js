// let soma = require("./arquivo").soma
// let subtracao = require("./arquivo") 

// console.log(soma(2,5))
// console.log(subtracao.subtracao(2,5))

let {soma, subtracao}=require('./arquivo')
console.log(subtracao(2,5))