/*let i = 1;
while(i<=3){
    console.log(`Loop ${i}`);
    i++;
}
*/

/*
let ans = prompt('Enter a football club');

while(ans !== "Arsenal"){
    console.log(ans)
    ans = prompt('Enter a football club'); //While condition keeps executing the cycle until the condition is true.
}
*/
// YOU CAN ONLY ACCESS VARIABLES THAT ARE INSIDE A CLOSURE TOGETHER.ALSO, A VARIABLE IN A CLOSURE CAN WORK FOR A VARIABLE OUTSIDE THE CLOSURE BUT CALLED BEFORE THE CLOSURE.
// let a = 20;
// console.log(a);
//
// if(true){
//     let a = 10;
//
//     if(a === 10){
//         console.log(a);
//     }
// }


/*let a = 20;
console.log(a);//20

if(a === 20){
    a = a + 100;
}
console.log(a);/*///120

/*let ans = prompt('Enter your football club');
let count = 0;
while(ans !== "Arsenal"){
    console.log(ans)
    ans = prompt('Enter your football club');
    count++;
}
console.log(`you made ${count} mistakes`);*/


/*let i = 1;
while(i <= 10){
    document.write(`<h3> Outside ${i}</h3>`);
    let j = 1;
    while(j<=3){
        document.write(`<h4> Inside ${i}</h4>`)
        j++;
    }
    i++;
}
 */

//DO WHILE IS THE OPPOSITE OF OTHER (IF, FOR, WHILE) CONDITIONS.
// let ans = prompt('Enter your football club');
// let count = 0;
// do{
//     ans = prompt('Enter your football club');
//     count++;
// }
// while(ans !== "Arsenal")
//     console.log(`You made ${count} mistakes`);

/*for(let i = 1; i <= 10; i ++){
    console.log(`Loop ${i}`);
    if(i === 5) break;
}*/

/* for(let i = 1; i <= 10; i++){
    if(i === 5) continue;
    console.log(`Loop ${i}`);
}*/

// Practical 1:
// The user enters 5 numbers in a row through the prompt.
// Find the number of negative numbers and output the result via console.log.

/*let i=1;
let count = 0;
while(i<=5){
    let num = +prompt('write number');
    if(num<0) count++
    i++
}
console.log(count);
*/

// Practical 2:
// Ask the user how many stars he wants to see on the page
// and in what location he wants to see them: horizontal or vertical.
// You need to create a new variable and request more data from the user:
// let 1 be a horizontal line of stars and 2 be a vertical line.
// let star = +prompt('write count star');
// let dir = +prompt('1 - hor, 2 - ver');
// let i=1;
// while(i<=star){
//     if(dir===1){
//         document.write("<span>*</span>");
//     }
//     else if(dir===2){
//         document.write("<p>*</p>");
//
//     }
//     i++
// }

// practical 3:
// The user enters numbers in turn until a negative number is entered.
// You need to calculate the number of numbers that were entered before stopping the loop.
// let count = 0;
// let num = +prompt('write number')
// while(num>0){
//     num = +prompt('write number')
//     count++
// }
// console.log(count)

    // Practical 4:
   // Asterisks must be displayed until the user stops this process.
    // Accordingly, after removing each asterisk, ask the user if he wants more.
/*    let a = 1;
    do{
        document.write('<h1>*</h1>')
        a = confirm('more?')
    }
    while(a){
    a++;
}
*/

// Практична 5.
// The user enters a number. Display a message if the user entered an even or odd number, as well as zero.
/*let n = +prompt('write number');
if(n%2==0 && n!=0){
    console.log('guys');
}
else if(n===0){
    console.log('zero');
}
else {
    console.log('not guys');
}
*/



  // Практична 6.
  //
  // let n1 = +prompt('write number 1');
  // let n2 = +prompt('write number 2');
  // for(let i=n1; i<=n2; i++){
  //   if(i%3==0){
  //     document.write(`<h2>Loop ${i}</h2>`);
  //   }
  // }



  // Example 9. With break we can exit the loop under certain conditions
/*  let res = '';
  while(true) {
      let a = prompt('write text');
        if (a == 100) {
            break;
        }
        res += a + " ";
    }
  console.log(res);
*/

  // However, if there is a cycle in a cycle, then only from within
  // let res = '';
  // while(true) {
  //   while (true) {
  //     let a = prompt('write text');
  //     if (a == 100) {
  //       break exit;
  //     }
  //     res += a + " ";
  //   }
  // }
  // console.log(res);

//
//This console will never come to fruition
// Only with the help of 'label' we can get out of two cycles
//   let res = '';
//   exit: {
//   while (true) {
//     while (true) {
//       let a = prompt('write text');
//       if (a == 100) {
//         break exit;
//       }
//       res += a + " ";
//     }
//   }
//   }
//   console.log(res);
