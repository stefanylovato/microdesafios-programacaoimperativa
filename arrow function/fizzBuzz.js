/*let FizzBuzz = (num1, num2) => {
    for(let i=1; i<=100; i++){
        if((i % num1 == 0) && (i % num2 == 0)){
            console.log(msg1());
        } if (i % num1 == 0){
            console.log(msg2());
        } if(i % num2 == 0){
            console.log(msg3());
        } else{
            console.log(i);
        }
    }
}

let msg1 = () => 'FizzBuzz'
let msg2 = () => 'Fizz'
let msg3 = () => 'Buzz'


console.log(FizzBuzz(30,6));*/

let fizzBuzzN1 = (i,num1) => i % num1 == 0 ? "Fizz" : ""
let fizzBuzzN2 = (i,num2) => i % num2 == 0 ? "Buzz" : ""
let fizzBuzzT = (num1,num2) => {
    for(let i=1; i <= 100; i++){
        console.log(i + " - " + fizzBuzzN1(i,num1) + fizzBuzzN2(i,num2))
    }
}
fizzBuzzT(30,6)