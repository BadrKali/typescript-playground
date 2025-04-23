
// assignments 1 

// function calculate(numOne: number, numTwo: number): number {
//     return numOne + numTwo;
//   }
  
//   console.log(calculate(10, 20)); // 30
//   console.log(calculate("10", "20")); // We Don't Need This To Work
//   console.log(calculate(+true, +true)); // 2


// assignments 2

// function printInfo(valueOne: number | string , valueTwo: number | string): string {
//     return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
//   }
  
//   console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
//   console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
//   console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// assignments 3

// let arr: (number | boolean[] | (string | (string | number)[])[])[];

// arr = [1, [true, false], ["ogna",["ogna", 1]]];

// assignments 4

// function reportErrors(username, age: number) {
//     let rank = "Professor";
//     return `Username: ${username}`;
//     console.log("We Will Not Reach Here");
//   }
  
//   console.log(reportErrors("Elzero", 40));

// assignments 5

// let nothing;
// let theName: string = "Elzero";
// function showMyDetails(a = "", b = "", c) {
//   return `${a}${b}${c}`;
// }

// // Replace ???? With The Available Variables As Argument To Get The Result
// console.log(showMyDetails(nothing, nothing, theName)); // Elzero

// assignments 6

// function showMsg(user?: number | string, age?: boolean | number | string, country?: boolean | string) {
//     return `${user}${age}${country}`;
//   }
  
//   console.log(showMsg());
//   console.log(showMsg("Elzero"));
//   console.log(showMsg("Elzero", 40));
//   console.log(showMsg("Elzero", "40", "Egypt"));

// assignments 7

// Write The Function Here

// Using The Function => Do Not Edit

// function printInConsole(...values: (number | string | boolean)[]): string {
//     let result = "";
//     values.forEach((value) => {
//         result += `The Value Is ${value} And Type Is ${typeof value}\n`;
//     });
//     return result + "Done";
// }


// console.log(printInConsole(1, 2, 3, 4, 5));
// console.log(printInConsole("A", "B", "C"));
// console.log(printInConsole(true, false, false, true, true));

// // Output
// The Value Is 1 And Type Is number
// The Value Is 2 And Type Is number
// The Value Is 3 And Type Is number
// The Value Is 4 And Type Is number
// The Value Is 5 And Type Is number
// Done
// The Value Is A And Type Is string
// The Value Is B And Type Is string
// The Value Is C And Type Is string
// Done
// The Value Is true And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is false And Type Is boolean
// The Value Is true And Type Is boolean
// The Value Is true And Type Is boolean
// Done