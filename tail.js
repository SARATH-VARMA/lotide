//const assertEqual = require ('./assertEqual');
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
//   } 
//   else {
//     console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`)
//   }

// };
let tail =  function(array){
  if (array.length > 1){
    return array.slice(1);
  }
  else {
    return [];
  }
}
module.exports = tail;
