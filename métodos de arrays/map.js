//Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
const par=[2,4,6,8,10];

//funcao declarativa:

/*const impar = par.map(
    function(el){
        return el+1
    }
)
console.log(impar)*/

//arrow function
const impar=el=>el+1
console.log(par.map(impar))

