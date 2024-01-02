// //print
// console.log("Hello world!")
// // varriable
// //let fullName='Turag Sarkar';
// let age = 25;
// //object create 
// const profileInfo={
//     myAge:37,
//     myName:'TuragSarkar',
// } ;
// console.log(profileInfo.myAge)
// //Enter the value
// let newAge= prompt('Enter your present age');
// console.log(newAge);
// //condition
// if(newAge<50){
//     console.log("young boy");
// }else {
//     console.log('old age')
// }
// //String 
// let firstName = 'Turag';
// let lastName = 'Sarkar';
// let fullName = lastName.concat(firstName) ;
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
//Array(chapter5)
// let nameOf = ['turag', 'kabid', 'ohi'];
// console.log(nameOf);
// let index = 0 ;
// for ( index of nameOf){
//     console.log(index);
// }
// console.log(nameOf.length);

//console.log(typeof numOf);
//let numOf = [45,6,7,8,9,0];
// let newValue = numOf.toString();
// console.log(typeof newValue);
// let addValue = numOf.push(10);
// console.log(numOf,addValue);
// console.log(typeof numOf);
// numOf.pop();
// console.log(numOf);
// console.log(numOf.sort());//solve it alphabatical order.

// let newArray = (a,b)=>{
//     return a-b;//descending order
// }
//console.log(numOf.sort(newArray));

//practice 
let num = [40,46,49]
// let a = prompt('Enter your Number');
// a = Number.parseInt(a);
// num.push(a);
//console.log(num);
let a ; 
do{
a = prompt('Enter your Number');
a = Number.parseInt(a);
num.push(a);
}while(a!=0);
console.log(num);

const divisor =((X)=>{
    return X%10==0; 
})

let newArray = num.filter(divisor);
console.log(newArray);





