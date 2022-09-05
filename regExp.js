//let regExp = / hello /;

//let regExp = new RegExp("hello");
//
// let stringForTest = "blahhelloova";
//console.log(regExp.test(stringForTest));

// const result = /^hello/.test(stringForTest)// starts with 'hello'
// console.log(result);
//
// const result = /hello$/.test(stringForTest)// ends with 'hello'
// console.log(result);


// let stringForTest = "hello";
// const result = /^hello$/.test(stringForTest)// starts and ends with 'hello'
// console.log(result);

// let stringForTest = "hello sdv sdvfsd world";
// const result = /^hello.*world$/.test(stringForTest)// starts with hello with words in the center and ending with world
// console.log(result);

// let stringForTest = "hello sdv sdvfsd world wfw"; // false
// const result = /^hello.*world$/.test(stringForTest)// starts with hello with words in the center and ending with world
// console.log(result);

// let stringForTest = "hello sdv sdvfsd world wfw"; // false
// const result = /[a-z]/.test(stringForTest)// starts with a to z in lowercase letters.
// console.log(result);

// /[a-z]/  // a, b, c, ... , x, y, z
// /[A-Z]/  // A, B, C, ... , X, Y, Z
// /[a-c]/  // a, b, c
// /[0-9]/  // 0, 1, 2, 3, ... , 8, 9

// //let stringForTest = "bdefh"; // true
// let stringForTest = "12345"; // false
// const result = /[a-j]/.test(stringForTest)// starts with a to j in lowercase letters.
// console.log(result);


// let stringForTest = "km $#@ 2424"; // True
// const result = /[A-Za-z0-9]/.test(stringForTest)// contains both lowercase and uppercase letters with symbols.
// console.log(result);

// \d = [0-9] -  digits
// \D = [^0-9] -  everything but not digits
// \w = [A-Za-z0-9] -  everything in digits and lowercase letters
// \W = [^A-Za-z0-9] -  everything not in digits and not Uppercase letters
// \s = space or new line
// \S = everything but not space " "
// \0 = null
// \n = new line
// \t = tabulation signs . , / ? !
// \uXXX U+0002 (unicode)
// . Any symbol except new line \n
// [^] Any symbol except new line \n included |


// let stringForTest = "km $#@ 2424"; // False
// const result = /^\d$/.test(stringForTest)// means there has to be only one digit.
// console.log(result);

// let stringForTest = "2424"; // True
// const result = /^\d+$/.test(stringForTest)// means there has to be more or more digits.
// console.log(result);

// let stringForTest = "2jkhjyfjhkj"; // True
// const result = /^\d+/.test(stringForTest)// means there has to be one digit at the beginning while others will be letters.
// console.log(result);

// let stringForTest = "275jkhjyfjhkj"; // True
// const result = /^\d{3}/.test(stringForTest)// means there has to be three digits at the beginning while others will be letters.
// console.log(result);

// let stringForTest = "275"; // True
// const result = /^\d{3}$/.test(stringForTest)// means it must start and ends with 3 digits.
// console.log(result);

// let stringForTest = "2754787388"; // True
// const result = /^\d{3,}$/.test(stringForTest)// means there has to be three digits at the beginning with other digits as much as possible.
// console.log(result);

// let stringForTest = "275 "; // True
// const result = /^\d{3}\s?$/.test(stringForTest)// means there has to be three digits at the beginning and a space.
// console.log(result);

// let stringForTest = "380936553474"
// const result = /^380\d{9}?$/.test(stringForTest)
// console.log(result);

// Quantifiers in Regular Expressions
//   + >= 1
//  * >= 0
//   {n} = quantity
//   {3,5} = quantity range between 3 and 5
//   {3,} = Not less than 3
//   ? optional
//   | or

//  FLAGS

// g - global
// i - no matter if its upper or lowercase
// m - multiple ^ $
// u - Unicode
// s - "single line"
//    /hello/ig.test('HElo')
//   source - template line
//   multiline - or is multiline included
//   global - true if g
//   ignoreCase - true if i
//   lastIndex - is $
console.log(/^(w{3})$/i.source)  // false
console.log(/^(w{3})$/i.multiline)// false
console.log(/^(w{3})$/i.lastIndex)// 0
console.log(/^(w{3})$/i.ignoreCase)// true
console.log(/^(w{3})$/i.global)// false



let stringForTest = "HEllo"
const result = /^hello$/i.test(stringForTest)
console.log(result);






