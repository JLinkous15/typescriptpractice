let sales: number = 123_456_789;
let course: string = 'Typescript';
let isPublished: boolean = true;

function render(document: any) {
    console.log(document)
}

let numbers: number[] = [1, 2, 3];

//tuples
let tuple: [number, string] = [1, 'James'];

//enums - a list of related constants
const small = 1;
const medium = 2;
const large = 3;
//pascal case for both the enum and the properties.
//value of properties is set to its 'index' but can be overwritten like the example below.

//without "const" in front of enum in compiled js file
// var Size;
// (function (Size) {
//     Size[Size["Small"] = 1] = "Small";
//     Size[Size["Medium"] = 2] = "Medium";
//     Size[Size["Large"] = 3] = "Large";
// })(Size || (Size = {}));
// let mySize = Size.Medium;
// console.log(mySize);

//with "const" in front of enum in compiled js file
// let mySize = 2;
// console.log(mySize);

const enum Size { Small = 1, Medium = 2, Large = 3 }
let mySize: Size = Size.Medium;
console.log(mySize)