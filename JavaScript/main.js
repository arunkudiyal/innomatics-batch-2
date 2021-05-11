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


// FUNCTIONS - function

// function declararion
function sayName(name) {
    return `Hi, ${name}`
}

function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
    return a + b;
}

// function call
const message = sayName('Subhash')
console.log(message);

const added = add(true, false);
console.log(added);