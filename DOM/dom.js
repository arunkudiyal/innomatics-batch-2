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
const headerTitle = document.getElementById('header-title')
console.log(headerTitle);

// DOM Manipulators
headerTitle.textContent = 'New Text'
headerTitle.innerHTML = '<h3>New Header with h3</h3>'

const mainHeader = document.getElementById('main-header')
console.log(mainHeader);
// mainHeader.style.fontFamily = 'cursive'
// headerTitle.style.background = 'black'

mainHeader.style.borderBottom = 'solid 10px black'