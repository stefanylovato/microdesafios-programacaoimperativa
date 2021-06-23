let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"]

let filmesMaiusculas = [filmes[0].toUpperCase(),
filmes[1].toUpperCase(),
filmes[2].toUpperCase(),
filmes[3].toUpperCase(),
filmes[4].toUpperCase(),
]
console.log(filmesMaiusculas)

for(let i=0; i <filmes.lenght; i++){
  filmesMaiusculas[i]=filmesMaiusculas[i.toUpperCase()]
}

//----------------------------------------------------------//

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"]

for (let i=0; i<cartoons.length; i++){
  filmes.push(cartoons[i])
}

filmes.pop()
console.log(filmes)

//---------------------------------------------------------//

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9]; 

for (let i=0; i<asiaScores.length; i++){
    if (asiaScores[i]==euroScores[i]){
        console.log("é igual") }
    else {
        console.log("é diferente")
    }
}