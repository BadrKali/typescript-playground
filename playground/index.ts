//  #05 - type annotation and any data type


// let theName: string = "John Doe";
// let theAge: number = 30;
// let hired: boolean = true;

// let all: any = "John Doe";
// let result: number;

// all = 100 

// function add(n1: number, n2:number) {
//     return n1 + n2;
// }

// result = add(44, 2)
// console.log(result)



// #06 - Type Annotations With Arrays

// let all: (string | number) = "John Doe";


// all = "A"
// all = 100

// let myFriends: string[] = ["John", "Doe", "Jane"];


// #07 - Type Annotations With Multidimensional Arrays

// let arrayOne :number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["John", "Doe", "Jane"];
// let arrayThree: (string | number)[] = ["John", 1, "Doe", 2, "Jane", 3];
// let arrayFour: (string | number)[][] = [
//     ["John", 1],
//     ["Doe", 2],
//     ["Jane", 3]
// ];
// let arrayFive: (string | string[] | number )[] = [
//     "John",
//     ["Doe", "Jane"],
//     1,
//     2,
//     3
// ] 

// #08 - Type Annotations With Function

// noImplicitAny : false mean that we can use any data type

//noImplicitReturnType
// ---will check all code paths in a function to ensure they return a value

//noUnusedLocals
// ---will check all local variables in a function to ensure they are used


//noUnusedParameters
// ---will check all function parameters to ensure they are used



// let shoMsg = true;

// function showDetails(name: string, age: number, salary: number) : string {
//     if (shoMsg) {
//         return `Name: ${name}, Age: ${age}, Salary: ${salary}`;
//     }
//     return "No data available";
// }


// console.log(showDetails("John Doe", 30, 1000));



// #09 - Function Optional and Default Parameters

// Function
// --> Optional and default Parameters
// --> Optional Parameters : 
// ex: function showData(name: string, age: number, country?: string) 


// function showData(name: string = "test", age: number, country?: string) {
//     return `Name: ${name}, Age: ${age}, Country: ${country}`;
// }


// console.log(showData("John Doe", 40));


// #10 - Function Rest Parameter

// function addAll(...numbers: number[]) : number {
//     let sum = 0;
//     // for (let i = 0; i < numbers.length; i++) {
//     //     sum += numbers[i];
//     // }
//     numbers.forEach((number) => {
//         sum += number;
//     })
//     return sum;
// }


// console.log(addAll(1, 2, 3, 4, 5.5, +true));


// #11 - Type Annotations With Anonymous And Arrow Function

// const add = function(num1: number, num2: number) : number {
//     return num1 + num2;
// }

// console.log(add(1, 2));

// const addWithArrow = (num1: number, num2: number) : number => {
//     return num1 + num2;
// }

// console.log(addWithArrow(1, 2));

// #12 - Data Types - Type Alias

// type st = string
// let test: st = "hello world"

// type standnum = string | number
// let test2: standnum = "hello world"
// let test3: standnum = 100

// #13 - Data Types - Type Alias Advanced

// type Button = {
//     up: string;
//     down: string;
//     left: string;
//     right: string;
// }

// type Last = Button & {
//     x: boolean;
// }

// function getAction(button: Last) {
//     console.log(`action for button up: ${button.up}` );
//     console.log(`action for button down: ${button.down}` );
//     console.log(`action for button left: ${button.left}` );
//     console.log(`action for button right: ${button.right}` );

// } 

// getAction({
//     up: "up",
//     down: "down",
//     left: "left",
//     right: "right",
//     x: true
// })


// #14 - Data Types - Literal Types

// type result = 1 | -1 | 0

// function compaire(num1, num2) : result {
//     if (num1 > num2) {
//         return 1
//     } else if (num1 < num2) {
//         return -1
//     } else {
//         return 0
//     }
// }

// console.log(compaire(1, 2));
// console.log(compaire(2, 1));
// console.log(compaire(1, 1));


// #15 - Data Types - Tuple

// let article: readonly [string, number, boolean] = ["John Doe", 30, true];
// article = ["John Doe 2", 40, false];

// //you can not change the value of the tuple
// // article.push(100);

// const [title, id, published] = article;

// #16 - Data Types - Void And Never


// #17 - Data Types - Enums Part 1

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;


// enum Level {
//     KIDS = 15,
//     EASY = 9,
//     MEDIUM = 6,
//     HARD = 3
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//     console.log(Level.EASY);
// }


// #19 - Data Types - Type Assertions

// let myImg = document.getElementById("myImg") as HTMLImageElement; 
// let myImg = <HTMLImageElement>document.getElementById("myImg");
// console.log(myImg.value); // throw error because value is not a property of HTMLImageElement
// console.log(myImg.src); // this is correct


// let data: any = "hello world";
// console.log((data as string).replace("hello", "hi")); 

// #20 - data types - union and intersection types


// type A = {
//     one: string,
//     two: number,
//     three: boolean
// }



// type B = A & {
//     four: number
// }

// type C = {
//     five: boolean
// }

// type mix = A & C 

// function getActions(btns: B) {
//     console.log(`action for button one: ${btns.one}` );
//     console.log(`action for button two: ${btns.two}` );
//     console.log(`action for button three: ${btns.three}` );
//     console.log(`action for button four: ${btns.four}` );
// }

// getActions({
//     one: "one",
//     two: 2,
//     three: true,
//     four: 4
// })

// #21 - Type Annotations with object

// let myObject: {
//     readonly username: string,
//     id: number,
//     hire?: boolean,
//     skills: {
//         html: boolean,
//         css: boolean,
//         js: boolean
//     }
// } = {
//     username: "Elzero",
//     id: 100,
//     // hire: true,
//     skills: {
//         html: true,
//         css: true,
//         js: false
//     }
// }

// // myObject.username = "John Doe"
// myObject.id = 200
// myObject.hire = false

// console.log(myObject.username);
// console.log(myObject.id);
// console.log(myObject.hire);
// console.log(myObject.skills.html);