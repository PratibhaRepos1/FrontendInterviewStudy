// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";
//variables
let name;
name = 'Bob';

//Write a function that takes a string as an input and returns the string reversed.
function reverseStringWithoutBuiltInFunctions(str) {
    let reversedStr = '';

    for(let i= str.length - 1; i>= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
//console.log(reverseStringWithoutBuiltInFunctions('Hello'));

/* using
reverseString using Built In Functions of strings
*/
function reverseString(str) {
  let strArray = str.split('');
  let reverseArray = strArray.reverse();
  let reverseStr = reverseArray.join('');

  return reverseStr;


}

console.log(reverseString('One'));