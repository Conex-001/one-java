// String-1 -- nonStart
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava

function nonStart(a, b) {
    return a.slice(1) + b.slice(1);
  }
  console.log(nonStart('Hello', 'There'));
console.log(nonStart('java', 'code'));   
console.log(nonStart('shotl', 'java'));  
