let randomValue =Math.floor( Math.random() *100)+1;//math floor for whole number.
console.log(randomValue);
console.log('Guess the number');
let number = prompt("Enter your number: ");
if(number == randomValue){
    console.log('You are guessing perfect number');
}else{
    console.log('Try again once more');
}
