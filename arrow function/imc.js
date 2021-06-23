//criar arrow function que receba a altura em centímetros e o peso em kg e calcule o imc do usuario (peso/altura2)
const imc = (peso, altura) => (peso / (altura**2)).toFixed(1)
console.log(imc(80, 1.80))

/*let imc=(peso, altura)=>{
    altura = altura/100;
    return (peso/Math.pow(altura,2)).toFixed(1);
}
console.log(imc(70,150));*/
