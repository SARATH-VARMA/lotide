const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } 
  else {
    console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`)
  }

};
let tail =  function(array){
  if (array.length > 1){
    return array.slice(1);
  }
  else {
    return [];
  }
}
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const singleElementArray = tail(["Hello"]);
assertEqual(singleElementArray.length, 0); // ensure we get back two elements
const emptyArray = tail([]);
assertEqual(emptyArray.length, 0); // ensure we get back two elements

