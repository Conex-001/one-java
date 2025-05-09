// Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

// Examples

// withoutEnd('Hello') → ell
// withoutEnd('java') → av
// withoutEnd('coding') → odin

function withoutEnd(str) {
    return str.slice(1, str.length - 1);
  }
  console.log(withoutEnd('Hello'));
console.log(withoutEnd('java'));    
console.log(withoutEnd('coding'));   
