let userName = 'Paul'

// userName = 34;
userName = 'Finn'

let userAge = 67;

let isValid= true;

// Base type (string, number, boolean) ---------


// Union type --------------------------

let userID: string | number = 'abc123';
userID = 123;


//////////////// Objects //////////////////////

// let user : {};

let user: {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

user = {
    name: 'Rosa',
    age: 24,
    isAdmin: true,
    id: 'abc123',
}


type User = {
    name: string;
    age: number;
    isAdmin: boolean;
    id: string | number;
}

// let user: User;

// user = {
//     name: 'Rosa',
//     age: 24,
//     isAdmin: true,
//     id: 'abc123',
// }

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

// type StringOrNum = string | number
// let userID: StringOrNum = 'abc123';
// userID = 123;

////////////// Interface /////////////////
// - for defining object types you can use 'interface' & 'type'
// !!! with 'interface' you cannot use union types !!!

interface Credentials {
    password: string;
    email: string; 
}

let creds : Credentials;

creds = {
    password: 'abc',
    email: 'test@example.com',
}

// Only possible with using interface
class AuthCredentials implements Credentials {
    email: string;
    password: string;
    username: string;
}

function login(credentials: Credentials) {}

login(new AuthCredentials())

// Merging types
// both of them is possible, but with different syntax

// type Admin = {
//     permissions: string[];
// }

// type AppUser = {
//     userName: string;
// }

// type AppAdmin = Admin & AppUser;

interface Admin {
    permissions: string[];
}

interface AppUser {
    userName: string;
}

interface AppAdmin extends Admin, AppUser{}

let admin: AppAdmin;

admin = {
    permissions: ['login'],
    userName: 'Finn',
}

////////////// Literal Types ///////////////

// let role: 'admin' | 'user' | 'editor';

type Role = 'admin' | 'user' | 'editor';
let role: Role;

role = 'admin';
role = 'user';
role = 'editor'; 
// role = 'abc';

function performAction(action: string | number, role: Role) {
    if(role === 'admin' && typeof action === 'string'){
        //...
    }
}


///////////////// Generic Types //////////////

// Built-in generic type
let roles: Array<Role>;

roles=['admin', 'editor'];

//           T = placeholder, type is unknown at the moment
type DataStorage<T> = {
    storage: T[];
    add: (data: T) => void;   // void = something would happen in this function
};

const textStorage: DataStorage<string> = {
    storage: [],
    add(data) {
        this.storage.push(data);
    }
}

const userStorage: DataStorage<User> = {
storage: [],
add(user) {}
}

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    };
}

const newUser = merge<{name: string}, {age: number}>(
    {name: 'Laureus'},
    {age: 56},
);