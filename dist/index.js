"use strict";
var _a;
let sales = 123456789;
let course = 'Typescript';
let isPublished = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let tuple = [1, 'James'];
const small = 1;
const medium = 2;
const large = 3;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log(calculateTax(10000, 2023));
let employee = {
    id: 1,
    name: "James",
    retire: (date) => {
        return console.log(date);
    }
};
employee.faxNumber = 4;
employee.retire(new Date());
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(15));
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 50;
let newQuantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log(("hola!"));
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null && customer !== undefined)
    console.log(customer.birthday);
let customer1 = getCustomer(1);
console.log((_a = customer1 === null || customer1 === void 0 ? void 0 : customer1.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [];
customers === null || customers === void 0 ? void 0 : customers[1];
//# sourceMappingURL=index.js.map