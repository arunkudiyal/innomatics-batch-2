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


// querySelectorAll - id(#) + className(.) + tagName | returns NodeList rather than HTMLCollection

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

// const textInput = document.querySelector('#text-input')

// person = [ {id: 1, name: 'Subhash', designation: 'SDE-1'}, {id: 2, name: 'User 2', designation: 'SDE-2'} ]
// textInput.addEventListener('keyup', (event) => {
//     console.log(event.target.value);
// })

// function fun(e) {
//     // console.log(e);
//     console.log(e.target.value);
// }


// FUN ACTIVITY FOR THE THINGS THAT WE LAERNT
// const box = document.querySelector('#box');
// // console.log(box);

// box.addEventListener('mouseout', fun)

// function fun(e) {
//     box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
// }



// DOM TRAVERSALS

// 1. PARENT NODE - parentElement | parentNode

// const items = document.querySelector('#items') // ul
// console.log(items);

// // Find the parent element of the items
// console.log(items.parentElement);

// console.log(items.parentNode);

// // Change the values or style
// items.parentElement.style.backgroundColor = '#f4f4f4'

// // Chaining of the DOM
// console.log(items.parentElement.parentElement);


// // 2. CHILD NODES - childNodes | children | firstElementChild | lasTElementChild

// // console.log(items.childNodes); // text which is used in indentation
// // console.log(items.children);

// // console.log(items.children[1]);
// // items.children[1].style.backgroundColor = 'yellow'


// // firstChild
// console.log(items.firstChild);  // text used for identation
// console.log(items.firstElementChild);
// // items.firstElementChild.textContent = 'Changed!'

// // lastChild
// console.log(items.lastChild);  // text used for identation
// console.log(items.lastElementChild);
// items.lastElementChild.style.color = 'red'


// // 3. SIBLINGS - prevoiousElementSibling | nextElemenTSibling

// // items.previousSibling - text
// console.log(items.previousElementSibling);

// console.log(items.nextElementSibling.nextElementSibling);



// CREATING ELEMENTS USING DOM & RUN-TIME RENDERING

// const new_li = document.createElement('li')

// //set the class
// new_li.className = 'list-group-item';

// // set an ID
// new_li.id = 'new-li-id'

// // set a 3rd party attribute
// // new_li.setAttribute('src', 'testting')

// // put the content in the element
// new_li.textContent = 'Item 7'

// // Add the new_li element as a child to the ul (#items)
// const items = document.querySelector('#items')
// const btn = document.querySelector('#button')

// btn.addEventListener('click', () => {
//     items.appendChild(new_li)
// })

// console.log(new_li);