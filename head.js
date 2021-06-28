// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } 
//   else {
//     console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`)
//   }

// };
const assertEqual = require('./assertEqual');
let head =  function(array){
  if (array[0]){
    return array[0];
  }
  else {
    return undefined;
  }
}
module.exports = head;