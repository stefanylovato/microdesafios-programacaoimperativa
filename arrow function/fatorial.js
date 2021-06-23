let resultado = 1;

let fatorar = n1 => {
    for(let i=0; i<n1; i++){
        resultado = (n1-i)*resultado
    }
    return resultado
}
console.log(fatorar(10))

//------------------------------------------------//
let resultado2 = 1

let fatorial = num1 => {
    if (num1 > 1) {
        resultado2 = num1*resultado2
        fatorial(num1-1)
    } 
}
fatorial(5)
console.log(resultado2)