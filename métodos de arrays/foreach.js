//Crie um array de animais, após isso passe por cada índice utilizando 
//o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

/* array.forEach(function(elemento)){
    definimos o comportamento que queremos
    implementar sobre cada elemento
}) */

const animais=['leão', 'tigre', 'gato', 'cisne', 'urso'];

animais.forEach(function(el){
    console.log('O animal é '+el)
})

