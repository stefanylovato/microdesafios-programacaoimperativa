//Crie um array de números e utilize a função .reduce() para devolver 
//uma string com os números formatados.

//Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”


const num = [3,5,8,15];
const string = num.reduce(
    function(acumulador,el){
        return acumulador+ ' - '+ el
    }
)

console.log(string)
