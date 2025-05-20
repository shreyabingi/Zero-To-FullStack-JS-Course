// ************ DOM SELECTORS ************
// // 1. getElementsByTagName
// in css will use h1{
//     style
// }
// console.log(document.getElementsByTagName("h1").length);



// 2. getElementById
// console.log(document.getElementById("main"));



// 3. getElementsByClassName 
// console.log(document.getElementsByClassName("cls"));
// 4. querySelector
// if we want to target only the first class it will not apply to other class even if it has the same class
console.log(document.querySelectorAll("li"));

// 5. querySelectorAll
// we will use query selector all when we want that the class we want to apply changes will also afftect the divs which have the same class
console.log(document.querySelector("li"));
// ---------------------------------------
// Storing data in variables
const name = document.getElementsByTagName("h1");
console.log(name)