var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Paul';
// userName = 34;
userName = 'Finn';
var userAge = 67;
var isValid = true;
// Base type (string, number, boolean) ---------
// Union type --------------------------
var userID = 'abc123';
userID = 123;
//////////////// Objects //////////////////////
// let user : {};
var user;
user = {
    name: 'Rosa',
    age: 24,
    isAdmin: true,
    id: 'abc123',
};
// let user: User;
// user = {
//     name: 'Rosa',
//     age: 24,
//     isAdmin: true,
//     id: 'abc123',
// }
//////////////// Array Types //////////////////////
// let hobbies: Array<string>;
var hobbies;
hobbies = ['Sports', 'Cooking', 'Reading'];
//////////////// Functions Types //////////////////////
function add(a, b) {
    var result = a + b;
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
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
var creds;
creds = {
    password: 'abc',
    email: 'test@example.com',
};
// Only possible with using interface
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) { }
login(new AuthCredentials());
var admin;
admin = {
    permissions: ['login'],
    userName: 'Finn',
};
var role;
role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        //...
    }
}
///////////////// Generic Types //////////////
// Built-in generic type
var roles;
roles = ['admin', 'editor'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    }
};
var userStorage = {
    storage: [],
    add: function (user) { }
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'Laureus' }, { age: 56 });
