//  window object
// The window object represents as open window in the browser. It is browser's object (not javascript's) & is automatically 
// created by browser.

// it is global object with lots of properties & methods

// what is DOM?
// When a web page is loaded, the browser creates a document object model (DOM) of the page



// dom manipulation 
// selecting with id 
// document.getElementById("#heading");
// console.dir(headings);

// selecting with class
let headings=document.getElementsByClassName("heading1");
console.dir(headings);
console.log(headings);



// selecting with p tag
let para=document.getElementsByTagName("p");
console.dir(para);
console.log(para);


// selecting by quary selectors
let element=document.querySelector("p");
console.dir(element);  
console.log(element);
