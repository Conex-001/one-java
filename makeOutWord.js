// Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

// Examples

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]

function makeOutWord(out, word){
    let firstPart = out.substring(0, 2); 
    let secondPart = out.substring(2, 4);
    
    return firstPart + word + secondPart;
  }
  console.log(makeOutWord("<<>>", "word"));
