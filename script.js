//print
console.log("Hello world!")
// varriable
//let fullName='Turag Sarkar';
let age = 25;
//object create 
const profileInfo={
    myAge:37,
    myName:'TuragSarkar',
} ;
console.log(profileInfo.myAge)
//Enter the value
let newAge= prompt('Enter your present age');
console.log(newAge);
//condition
if(newAge<50){
    console.log("young boy");
}else {
    console.log('old age')
}
//String 
let firstName = 'Turag';
let lastName = 'Sarkar';
let fullName = lastName.concat(firstName) ;
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())

