const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};
const assertArraysEqual = function(arr1,arr2){
  
  if (eqArrays(arr1,arr2)){
    console.log("✔️✔️✔️ Assertion Passed:" , arr1 , "===" , arr2);

  } else {
    console.log("❌ ❌ Assertion Failed:" , arr1 , "!==" , arr2);
  }

};
const takeUntil = function(array, callback) {
  const results = [];
  for(let item of array){
      if (callback(item)){
        return results;
      }
      results.push(item);
  }
  //if no item in the array satisfies the condition
  return results;
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0),[1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','),['I\'ve', 'been', 'to', 'Hollywood']);