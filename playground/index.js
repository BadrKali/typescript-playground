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
function showData(name, age, country) {
    if (name === void 0) { name = "test"; }
    if (age === void 0) { age = 12; }
    if (country === void 0) { country = "usa"; }
    return "Name: ".concat(name, ", Age: ").concat(age, ", Country: ").concat(country);
}
console.log(showData("John Doe"));
