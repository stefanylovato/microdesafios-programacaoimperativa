let times = ['Boca Juniors', 'Bahia', 'São Paulo', 'Flamengo', 'Corinthians'];

//acessar elementos específicos
console.log(times[4]);

//percorrer e modificar cada um de seus elementos
console.log(times.join("; "));

//adicionar elementos a um array
console.log(times.push('Palmeiras', 'Chapecoense'));
console.log(times);

//excluir
times.pop();
console.log(times);

times.shift();
console.log(times);

console.log(times.includes('Atletico'))