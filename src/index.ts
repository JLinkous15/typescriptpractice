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
//value of properties is set to its 'index' but can be overwritten like the example below. Only the first property requires assignment in this context, as the compiler will natively add 1 to the following values.

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

const enum Size { Small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize)

//functions require types for the arguments as well as for the expected return value. Instead of providing a type to taxYear in the example below, you can assign a default value to allow that argument to be void.

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022) {
        return income * 1.2
    }
    return income * 1.3
}

console.log(calculateTax(10_000, 2023))

//define an object is the synax below. readonly prevents the id from being modified or reassigned, and the ? suggests it is an optional value, which can be seen by the fact it is not initialized but is reassigned later.
//type allows for a DRY (don't repeat yourself) mode of coding. Defining a type for employee allows for multiple employees to be defined with a consistent shape.
type Employee = {
    readonly id: number,
    name: string,
    faxNumber?: number,
    retire: (date: Date) => void
}

let employee: Employee = {
    id: 1,
    name: "James",
    retire: (date: Date) => {
        return console.log(date)
    }
}
employee.faxNumber = 4
employee.retire(new Date())

//Union Types allow multiple data types to be assigned to a variable
function kgToLbs(weight: number | string): number {
    //Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    } else {
        return parseInt(weight) * 2.2
    }
}
console.log(kgToLbs(15))

//Intersection Types uses an 
//works mainly with custom types, and no data can be both a number and a string data type
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//Literal Types accept exclusively the values passed into it's Literal Type
let quantity: 50 | 100 = 50
//OR make an alias
type Quantity = 50 | 100
let newQuantity: Quantity = 100

//Nullable Types
function greet(name: string | null) {
    if (name)
        console.log(name.toUpperCase())
    else
        console.log(("hola!"))
}

greet(null)

//Optional property access operator
//Create a custom type of Customer and define it's shape. birthday is currently optional.
type Customer = {
    birthday?: Date
}
//Pretend this is a function that is returning a promise
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }
}
//The non-Typescript way to account for null and undefined (falsy) values
let customer = getCustomer(0)
if (customer !== null && customer !== undefined)
    console.log(customer.birthday)
//The Typescript method using optional chaining. This ensures that both customer1 and birthday are not null or undefined
let customer1 = getCustomer(1)
console.log(customer1?.birthday?.getFullYear())
//Optional element access operator
let customers: any = []
customers?.[1]
