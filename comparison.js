// Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 20;
// Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 30;

//COMPARISON//

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //false
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Ineqaulity (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

// LOGICAL OPERATORS //

//AND
let x = 25;
let y = 35;
let z = 45;

console.log(x < y && y < z); //true
console.log(x > y && y > z); //false

//OR
let a = "Red";
let b = "Black";
let c = "Red";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isWhite = true;
let isBlack = false;

console.log(!isLight); //false
console.log(!isDark);  //true

console.log(!isLight && isDark); //false
console.log(isLight && !isDark); //true
console.log(isLight || isDark); //true
console.log(!isLight || isDark); //false
console.log(isLight == isDark); //false
console.log(isLight == !isDark); //true
