const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ ❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};
const countLetters = function (sentence) {
  const results = {};
  for(const letter of sentence ){
    if (letter !== ' '){
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }  
    
  }
  return results;

}

const output = countLetters("lighthouse in the house");
assertEqual(output["l"],1);
assertEqual(output["i"],2);
assertEqual(output["h"],4);