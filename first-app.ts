let userName = 'Paul'

// userName = 34;
userName = 'Finn'

let userAge = 67;

let isValid= true;

// Base types = string, number, boolean


// Union type

type StringOrNum = string | number

let userID: StringOrNum = 'abc123';
userID = 123;


//////////////// Objects //////////////////////

// let user : {};

type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

let user: User;

user = {
    name: 'Rosa',
    age: 24,
    isAdmin: true,
    id: 'abc123',
}

//////////////// Array Types //////////////////////

// let hobbies: Array<string>;
let hobbies: string[];

hobbies = ['Sports', 'Cooking', 'Reading'];

//////////////// Functions Types //////////////////////

function add(a: number, b: number) {
    let result = a + b;
    return result;
}

// In arrow functions
// function calculate(
//     a: number, 
//     b: number, 
//     calcFn: (a: number, b: number) => number
// ) {
//     calcFn(a, b);
// }

calculate(2, 5, add);

//////////////// Custom Types //////////////////////

type AddFn = (a: number, b: number) => number

function calculate(
    a: number, 
    b: number, 
    calcFn: AddFn
) {
    calcFn(a, b);
}