// BASICS OF JS

// Outputs
console.log('Hello...')
// alert('Hi...') // This is halt the markup 
// console.warn('This is a warning message!')
// console.error('This is an error!')

// ES6 Scoping
// let, var, const | let has a local scope | var has a global scope | const has a global scope
// let a
// a = 'Arun'
// console.log(a)
// a = undefined
// console.log(a)

// var percent;
// percent = 86.890
// console.log(percent);
// percent = 20
// console.log(percent);

// const isOkay = true
// // Cannot chnage 
// // isOkay = false
// console.log(isOkay);

// PRIMITIVE DATA TYPES IN JS

// number
// const num = 10
// console.log(typeof num);

// // string
// const name = 'Shreashi'
// console.log(typeof name);

// // boolean
// const isCool = false
// console.log(typeof isCool);

// // undefined
// const val1 = undefined
// console.log(typeof val1);

// // null
// const val2 = null
// console.log(typeof val2);


// STRINGS & STRING METHODS

// const str = 'JavaScript, Programming, is, a, lot, of, fun!'
// const s = 'PROGRAMMING'

// // Get the length
// console.log('THE length of the string is: ', str.length);

// // Change the case
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// // Sub-Strings
// console.log( str.substr(10) ); // Always starts with 0
// console.log( str.substring(6, 16) ); // Takes start and the end

// // Split -> split the whole string on the basis of something | Returns an array
// console.log( str.split(', ') );

// console.log(s.indexOf('M')); | -1 if it doesnt exist OR index of the letter



// ARRAYS -> A collection of datatypes | Arrays are 0 based | [  ]

// 1. Array Constructor
// 2. using '[]'

// 1. Arrays using Array Constructor

// const courses = new Array('FSD', 'Data Science', 'AWS', 'Digital Marketing', 'Computer Networks')

// console.log(courses);

// // Access the values using indices
// console.log('The values are: ', courses[0] + ', ' + courses[1] + ', ' + courses[2]);

// // String Literals - ` ${ jS/ variables } `

// console.log( `The value at index 0 is ${courses[0]}, the value at index 1 is ${courses[1]}` );

// // 2. using []

// const subjects = ['Data Structures', 'DAA', 'Compiler Design', 101, null, undefined, true]

// console.log(subjects);


// OBJECTS - Represntation of data in form of key-value pair | {  }

// const user = {
//     name: 'Swati Singh',
//     age: 18,
//     // Array in Object
//     fav_colors: ['Red', 'Blue', 'Green', 'Yellow'],
//     designation: 'SDE',
//     company: 'Google',
//     // An object inside an object
//     address: {
//         street: 'Street - 1',
//         area: 'Mumbai',
//         state: 'Maharashtra',
//         country: 'India'
//     }
// }

// console.log(user);

// // Access the values - . notation

// console.log(`The name of the user is ${user.name}, she is ${user.age} years old. Her 2 very favourite colors are ${user.fav_colors[0]} and ${user.fav_colors[1]}. She lives in ${user.address.area}, ${user.address.state}, ${user.address.country}`);


// Array of Objects

// [ {}, {}, {}, {} ]

// const employees = [
//     {
//         emp_id: 19878,
//         designation: 'SDE',
//         company: 'Apple',
//         yearsOfExp: 3,
//         skills: ['C', 'C++', 'JS', 'Swift', 'Objective-C'],
//         location: {
//             officeLocation: 'Mumbai',
//             pin: 123456
//         }
//     },
//     {
//         emp_id: 45845785,
//         designation: 'Tester',
//         company: 'Apple',
//         yearsOfExp: 8,
//         skills: ['JUnit', 'Jasmine', 'Karma', 'Swift', 'DSA'],
//         location: {
//             officeLocation: 'Hyderabad',
//             pin: 676486
//         }
//     },
//     {
//         emp_id: 4237447,
//         designation: 'SD Manger',
//         company: 'Apple',
//         yearsOfExp: 12,
//         skills: ['MS PPT', 'Presentation', 'Public Speaking', 'Sales'],
//         location: {
//             officeLocation: 'Banglore',
//             pin: 747568
//         }
//     }
// ]

// console.log(`The length of the array is ${employees.length}`);
// console.log(employees);

// console.log(employees);

// // First Employee
// console.log(employees[0].designation);

// // Print the skills
// console.log( employees[0].skills[0], employees[0].skills[1], employees[0].skills[2] );

// console.log( employees[1].location.officeLocation );

// // JSON - JavaScript Object Notation | light-weight

// const response = JSON.stringify(employees);
// console.log(response);

// // MEME

// const values = ['🥚', '🐓']
// const answer = values.sort()
// console.log(answer);

// // Conditionals

// if(11 == '11') {
//     console.log(true);
// } else {
//     console.log(false);
// }

// console.log(100/0);

// console.log(100/'Arun');

// CONDITIONALS

// if, else, else-if

// Age range - 1 to 30, 30 to 60, 60 to 100

// const age = 31

// Let 
// if(age > 30) {
//     let temp = 'temp'
//     console.log(temp);

//     // Change in let is acceptable
//     temp = 'New Temp'
//     console.log(temp);

//     console.log(age)
// } else {
//     age = age - 10
// }

// Var
// if(age > 30) {
//     var temp = 'temp'
//     console.log(temp);

//     // Change in var is acceptable
//     temp = 'New Temp'
//     console.log(temp);

//     console.log(age)
// } else {
//     age = age - 10
// }

// Const
// if(age > 30) {
//     const temp = 'temp'
//     console.log(temp);

//     // Change in const is NOT acceptable
//     // temp = 'New Temp'
//     console.log(temp);

//     console.log(age)
// } else {
//     age = age - 10
// }

// console.log(temp);

// if(age > 18) {
//     console.log('Age is greater then 18');
// } else {
//     console.log('Age is less than 18');
// }

// SHORTHAND 
// condition ? true : false

// age > 30 ? console.log('Yes') : console.log('No')

// true ? 'Yes' : 'No'

// const color = 'Blue'

// color == 'Green' ? console.log('Color is Green') : console.log('Color id NOT Green');

// if(age <= 30) {
//     console.log('Range - 1');
// } else if( age > 30 && age <= 60 ) {
//     console.log('Range 2');
// } else {
//     console.log('Range 3');
// }


// LOOPS

// 1. for - loop , 2. while, 3. for - of Loop [Arrays]

// 1. for - loop
// for( let i = 0; i < 10; i+=2 ) {
//     console.log(`The value of i is ${i}`);
// }

// 2. while
// let i = 1
// while(i <= 10) {
//     console.log(`While Loop : ${i}`);
//     i+=2
// }

const todos = [
    {
        id: 1,
        task: 'Complete the assignment',
        isCompleted: false
    },
    {
        id: 2,
        task: 'Take my dog out for walk',
        isCompleted: false
    },
    {
        id: 3,
        task: 'Eat Lunch',
        isCompleted: true
    }
]

// const arrayExmaple = [10, 20, 30, 40, 50, 60, 101, 100, 900]
// console.log(arrayExmaple.length);

// for(let i = 0; i < todos.length; i++) {
//     console.log(todos[i].isCompleted);
// }

// for(let todo of todos) {
//     // if(todo.isCompleted === true) {
//     //     console.log(todo.task);
//     // }
//     console.log(todo);
// }

// Check the value
// if(21 == '21') {
//     console.log(`String 21 & Number 21 are same in == `);
// }

// Chcek the type as well as the value
// if(21 === '21') {
//     console.log('TRUE');
// } else {
//     console.log('FALSE');
// }


// HIGHER ORDER ARRAY METHOD - callbacks


// FUNCTIONS - function

// function declararion
// function functionName = (parameter(s)) {
//     functionBody
// }

// function sayName(name) {
//     return `Hi, ${name}`
// }

// result = sayName('Arun')
// console.log(result);


// // ARROW FUNCTIONS IN ES6 - Shorthand of writing functions
// const greet = (name) => {
//     // Body the the function
//     return `Hi, ${name}`
// }

// // call the function
// const greeting = greet('Saqlain')
// console.log(greeting);

// function add(a, b) {
//     console.log(typeof a);
//     console.log(typeof b);
//     return a + b;
// }

// // function call
// const message = sayName('Subhash')
// console.log(message);

// const added = add(true, false);
// console.log(added);


// Constructor Function

function Person_Function(firstname, lastName, dob) {
    
    // creating properties out of it | I am storing the paramete in a variable
    // Properties | Props
    this.firstname = firstname
    this.lastName = lastName
    this.dob = new Date(dob)

    // Create the functions | Methods
    this.getFullName = () => {
        return `${this.name} ${this.lastName}`
    }

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}

// Initialize an object from the constructor function
const person1 = new Person_Function('John', 'Ivy', '7-8-90')
const person2 = new Person_Function('Steve', 'Smith', '8-2-92')

console.log(person1);
console.log(person2);

// console.log(`The full name of Person - 1 is: ${person1.getFullName()}`);
// console.log(`The full name of Person - 2 is: ${person2.getFullName()}`);

// console.log(`The birth year of Person - 1 is: ${person1.getBirthYear()}`);
// console.log(`The birth year of Person - 2 is: ${person2.getBirthYear()}`);


// ES6 Classes

class Person {
    constructor(firstName, lastName, dob) {
        // Creating the properties of the class | Data Members
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    // Methods
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
}

// Creating the object out from Person CLASS
const arun = new Person('Arun', 'Kudiyal', '7-5-92')
console.log(arun);

// You can use methods, but cannot change the body the methods
console.log(`The full name is : ${arun.getFullName()}`);