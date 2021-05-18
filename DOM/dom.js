// See the DOM
// console.dir(document)

// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);

// console.log(document.all);
// // Access the main-header
// const mainHeader = document.all[10]
// mainHeader.textContent = `Hello`


// DOM MANIPULATION //


// Itenfier Methods - id, class & tagName

// getElementById - Only returns 1 element - id should be unique
// const headerTitle = document.getElementById('header-title')
// console.log(headerTitle);

// // DOM Manipulators
// headerTitle.textContent = 'New Text'
// headerTitle.innerHTML = '<h3>New Header with h3</h3>'

// const mainHeader = document.getElementById('main-header')
// console.log(mainHeader);
// // mainHeader.style.fontFamily = 'cursive'
// // headerTitle.style.background = 'black'

// mainHeader.style.borderBottom = 'solid 10px black'


// getElementsByClassName
// const listItems = document.getElementsByClassName('list-group-item')
// console.log(listItems);

// for(let i = 0; i < listItems.length; i++) {
//     // Even no of indices
//     if(i%2 == 0) {
//         listItems[i].style.color = 'red'
//     } else {
//         // Od  no of indices
//         listItems[i].style.color = 'blue'
//     }
// }

// listItems[1].textContent = 'New Text content'
// listItems[2].style.fontWeight = 'bold'


// getElementsByTagName
// const listItems = document.getElementsByTagName('li')
// console.log(listItems);

// // for(let i = 0; i < listItems.length; i++) {
// //         // Even no of indices
// //         if(i%2 == 0) {
// //             listItems[i].style.color = 'red'
// //         } else {
// //             // Od  no of indices
// //             listItems[i].style.color = 'blue'
// //         }
// //     }

// const ul = document.getElementsByTagName('ul')
// console.log(ul);

// // console.log(ul.length);

// const divs = document.getElementsByTagName('div')
// console.log(divs);


// querySelector - id + className + tagName | Only returns with 1 insatnce

// const heading = document.querySelector('#header-title')
// console.log(heading);

// const listItems = document.querySelector('.list-group-item')
// console.log(listItems);

// const lists = document.querySelector('li')
// console.log(lists);


// querySelectorAll - id(#) + className(.) + tagName |

// const heading = document.querySelectorAll('#header-title')
// console.log(heading);

// const listItems = document.querySelectorAll('.list-group-item')
// console.log(listItems);

// for(let i=0; i < listItems.length; i++) {
//     if(i%2 == 0) {
//         listItems[i].style.fontFamily = 'cursive'
//     }
// }

// const lists = document.querySelectorAll('li')
// console.log(lists);



// EVENTS

// const btn = document.querySelector('#button')
// // console.log(btn);

// // Listen to an event on the button | add an eventListner

// // One way of using eventListner
// btn.addEventListener('click', () => {
//     console.log('Button Clicked');
// })

// // Another way of using eventListner
// btn.addEventListener('click', onButtonClick)

// function onButtonClick() {
//     alert('Button was clicked again!')
// }


// const textInput = document.querySelector('#text-input')
// // console.log(textInput);

// textInput.addEventListener('focus', () => {
//     console.log('Focused on the text box');
// })

// textInput.addEventListener('blur', () => {
//     console.log('Blured on the text box');
// })

// Event Parameters | Gives you the meta-data related to the event fired

// const btn = document.querySelector('#button')

// btn.addEventListener('click', btnCLick)

// function btnCLick(event) {
//     console.log(event);
// }

const textInput = document.querySelector('#text-input')

textInput.addEventListener('keyup', (swati) => {
    console.log(swati.target.value);
})

// function fun(e) {
//     // console.log(e);
//     console.log(e.target.value);
// }


// FUN ACTIVITY FOR THE THINGS THAT WE LAERNT
const box = document.querySelector('#box');
// console.log(box);

box.addEventListener('mouseout', fun)

function fun(e) {
    box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}