/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

let pratos = ['Pipoca', 'Macarrão', 'Carne', 'Feijão', 'Brigadeiro'];
let tempo = [10, 8, 15, 12, 8];

let cozinhando = function (prato, segundos){
        let mensagem = 'Prato pronto. Tenha um bom apetite!'
        if(segundos < tempo[prato-1]*2 && segundos >= tempo[prato-1]) {
            mensagem = `${pratos[prato-1]} ficou pronto em ${segundos} segundos! ` + mensagem
        } else if(segundos >= tempo[prato-1]*2 && segundos < tempo[prato-1]*3) {
            mensagem = `${pratos[prato-1]} queimou em ${segundos} segundos de cozimento. ` + mensagem
        } else if(segundos >= tempo[prato-1]*3) {
            mensagem = `KABUM! ` + mensagem
        } else if(segundos < tempo[prato-1]) {
            mensagem = `O tempo de ${segundos} segundos é insuficiente. ${pratos[prato-1]} ainda não está pronto. ` + mensagem
        } else {
            mensagem = 'Opção incorreta. Prato inexistente.'
        }
        return mensagem;
    };

console.log(cozinhando(1, 10))
console.log(cozinhando(2, 16))
console.log(cozinhando(3, 45))
console.log(cozinhando(3, 50))
console.log(cozinhando(4, 5))
console.log(cozinhando(6, 5))

//esta versão foi feita com o grupo.






