// ****************************** CLASS 8 *************************************

// let examSheet ={
//     name: "zainab khimji",
//     rollNumber: 1234,
//     subject: "Computer"
// }
// console.log(examSheet);

// ****************************************************************************
//                              EK VALUE ACCSE KARNI HAI

// let examSheet ={
//     name: "zainab khimji",
//     rollNumber: 1234,
//     subject: "Computer"
// }
// console.log(examSheet.rollNumber);

// ****************************************************************************

// let examSheet ={
//     name: "zainab khimji",
//     rollNumber: 1234,
//     subject: "Computer"
// }
// console.log(`${examSheet.name},  ${examSheet.rollNumber}`);

// ****************************************************************************

// let car = {
//     name: "TOYOTA",
//     color:"BLACK",
//     features: "WINDOW ROOF",
//     model: "Crolla"
// }
// console.log(car.name);

// ****************************************************************************
//                          ANOTHER WAY TO ACCSES VALUE

// let car = {
//     name: "TOYOTA",
//     color:"BLACK",
//     features: "WINDOW ROOF",
//     model: "Crolla"
// }
// console.log(car["name"]);

// ****************************************************************************
//                        OBJECT KI DATA TYPE
//  let car: {
//     name: string
//     color:string
//     features: string
//     model: string
//     modelNum: number
// } = {
//     name: "TOYOTA",
//     color:"BLACK",
//     features: "WINDOW ROOF",
//     model: "Crolla",
//     modelNum:1234
// }
// console.log(car.name);

// ****************************************************************************

//                             TYPE ALIAS

// type  user ={
//     name:string
//     color:string
//     features:string
//     model:string
// }

// let car:user = {
//     name: "TOYOTA",
//     color:"BLACK",
//     features: "WINDOW ROOF",
//     model: "Crolla"
// }
// console.log(car.name);

// ****************************************************************************

//                         NESTED OBJECT

// type user ={
//     name:string
//     age:number
//     role:string
//     children:{
// name:string
// age:number
//     }
// }
// let user1:user ={
//     name:"zainab khimji",
//     age:18,
//     role:"daughter",
//     children:{
//         name:"none",
//         age:0
//     }
// }
// console.log(user1.children.age);

// ****************************************************************************
//                                 TYPE LITERAL  AND UNION

// let trafficLight:"red"|"yellow"|"green" = "red"
// let a:string|number = 123

// ****************************************************************************
//              PRACTICE TASK

// let drinks:"cold drink"|"lassi"|"tea"="tea"

// ****************************************************************************
//                               INTERSECTION
// type student={
//     name:string
//     rollNumber:number
// }
// type teacher={
//     name:string
//     exp:number
// }
// type both = teacher&student

// let std:student={
//     name:"zainab khimji",
//     rollNumber:1245
// }
// let std2 :student={
//     name:"neha khimji",
//     rollNumber:356
// }
// let teacher1:teacher={
//     name:"safa",
//     exp:10
// }

// let both1:both ={
//     name:"zainab",
//     exp:4,
//     rollNumber:3555
// }
// ****************************************************************************
//                        ARRAYS
// let fruits = ["apple","banana","kiwi"]
// console.log(fruits[3]);
// index : always used to determine the position

// ****************************************************************************
//                ELMENTS OF ARRAY
// let fruits = ["apple","mango","banana"]
// console.log(fruits.length);

// ****************************************************************************
//                ADD SOMETHING IN ARRAY : push

// let fruits = ["apple","mango","banana"]
// fruits.push("orange")
// fruits.push("banana")
// console.log(fruits);

//     ARRAY KAI LAST MAI VALUE ADD KARNI HAI HAI TO PUSH USE KARAY GAI.

// ****************************************************************************
//  TO REMOVE ONE ELEMENT FROM ARRAY AT THE LAST OF ARRAY: pop

//  let fruits = ["apple","mango","banana"]
//  fruits.pop()
//  console.log(fruits);

// ****************************************************************************
//   ARRAY KAI START SAI ELEMENT REMOVE KARNA HAI : shift

// let fruits = ["apple","mango","banana"]
// fruits.shift()
// console.log(fruits);

// ****************************************************************************
//              ARRAY KAI START MAI ADD KARTA HAI : unshift
let fruits = ["apple", "mango", "banana"];
fruits.unshift("orange");
console.log(fruits);

// ****************************************************************************
// home work
// array kai beech mai kaisay add karna hai
// push , pop ,shift kya return kartai hai
// ****************************************************************************













