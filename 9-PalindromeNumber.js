var isPalindrome = function (x) {
  let txt = "" + x;
  let ltr = "";
  let rtl = "";
  for (i = 0; i < txt.length; i++) {
    //    console.log("ltr Posición i: " + txt[i]);
    ltr += txt[i];
  }

  for (i = txt.length - 1; i >= 0; i--) {
    //    console.log("rtl Posición i: " + txt[i]);
    rtl += txt[i];
  }

  return ltr == rtl ? true : false;
};

// Testing the function
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(-121)); // false
// console.log(isPalindrome(10)); // false

const prompt = require("prompt-sync")({ sigint: true });
let number = prompt("Enter a number: ");
console.log(isPalindrome(number));
