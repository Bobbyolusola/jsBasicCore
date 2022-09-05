//NUMBER

// const str = "1";
// const num = 10;
// //const res = str + num; // 110. String will be displayed as string and not number in the console.log
// const res = num + str; // 101. String will be displayed as string and not number in the console.log
// console.log(res);


//Math
//console.log(Math.PI)

// let num = 254.0001;
// console.log(Math.floor(num)); // counts the first digits before the dot.
// console.log(Math.ceil(num)); // Adds 1 to the digit before the dot.
// console.log(Math.round(num)); // Approximates numbers more than 5 after the dot. to add to the digit before the dot.

// let num1 = 25.5;
// let num2 = 25.5;
//
// console.log(num1 + num2); //51
// console.log(Math.floor(num1) + Math.floor(num2)); //50
// console.log(Math.ceil(num1) + Math.ceil(num2)); //50
// console.log(Math.round(num1) + Math.round(num2)); //50

// const num = 5.13418342124
// console.log(num.toFixed()); //5. It clears all numbers after the dot.
// console.log(num.toFixed(1)); //5. It leaves first number after the dot.
// console.log(num.toFixed(2)); //5. It leaves second number after the dot.
// console.log(
//     +num.toFixed(2)
//     +
//     +num.toFixed(2)
//     ); //10.26 // + converts strings to numbers with digits after the dot.
// console.log(parseInt(num.toFixed(2))); //5 same as num.toFixed which is string

// console.log(Math.sin(1));
// console.log(Math.cos(1));
// console.log(Math.tan(1));
// console.log(Math.acos(1));
// console.log(Math.atan(1));
//
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(5, y=2));
//
// console.log(Math.abs(5.13));
//
// console.log(Math.max(-5, 13, 7, 4))
// console.log(Math.min(-5, 13, 7, 4))

// console.log(Math.random()); // selects random numbers from 0-1
// console.log(Math.random()*100); // selects random numbers from 0 * 100
// console.log(Math.round(Math.random()*100)); // selects random numbers from 0 * 100 and round it up

//Practice
//Enter a min and max number and select random numbers from it.
// let n1 = +prompt('write a minimum number'); //3
// let n2 = +prompt('write a maximum number'); //10
//
// function randomizer (min, max){
//     let rand = min + Math.random()*(max-min);
//     rand = Math.round(rand);
//     console.log(rand)
// }
// randomizer(n1, n2);

//
// function decimal(num){
//     let index = (num + '').indexOf('.') + 1;
//
//     let findLength = (num + '').slice(index).length;
//
//     num = (num - Math.floor(num)).toFind(findLength);
// }
// decimal(1.123456);

