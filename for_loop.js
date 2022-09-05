// for(start; condition; step){
// }

/*for(let i=0; i<3; i++){
    console.log('apple');
    console.log('orange');
    console.log('banana');
}*/

/*for(let i=0; i>-3; i--){
    document.write(`<h1>Loop ${i}</h1>`);
}*/

/*for( let j=1; j<=11; j++){
    document.write(`<h1>Loop ${j}</h1>`);
}*/

/*for(let count=200; count>0; count = count/2 - 20){
    document.write(`<h1>Loop ${count}</h1>`);
}*/

/*let answer = +prompt('write loop count');
for( let i=1; i <= answer; i++){
    document.write(`<h1>Loop number ${i}</h1>`);
}*/

/*(let start = +prompt('Write loop start');
let end = +prompt('write loop end');

for( let i = start; i <= end; i++){
    document.write(`<h1>Loop number ${i}</h1>`);
}*/

/*for( let i = 1; i <= 10; i++){
    document.write(`<h1>Outer Loop i = ${i}</h1>`);
    for( let j = 1; j <= 3; j++){
        document.write(`<h1>Inner Loop j = ${j}</h1>`);
    }
    if(i===5){
        document.write(`<h1>Half of outer loop</h1>`);
    }
}*/


/*let num = +prompt("Enter a number");
let degree = +prompt("Write degree");
let res = 1;

if(degree>0) {
    for (let i = 1; i <= degree; i++) {
        res = res * num;
    }
}  else if(degree<0){
     degree = -degree
     for(let i = 1; i<= degree; i++){
        res = res * num;
     }
     res = 1 / res;
}
document.write(res);*/

//ASSIGNMENT
//1. Create a program that calculates the factorial of a natural number n that the user enters from the keyboard.

// let num = +prompt("Enter a number");
// let res = 1;
//
// for(let i = 1; i <= num; i++){
//     res = res * i;
// }
// document.write(res);



// 2. Create a program that displays all four-digit sequence numbers 1000 1003 1006 1009 1012 1015… 9999
// -------------------------------------
/*
for(let i=1000; i <=10000; i=i+3){
    console.log(i);
}*/

/*//3.Create a program that displays the first 55 elements of the sequence 1 3 5 7 9 11 13 15 17…
for(let i = 1; i <= 55; i=i+2){
    document.write(i);
}*/

//4.
//Create a program that displays all non-negative elements of the sequence 90 85 80 75 70 65 60…
// let i = 90;
// while(i > 0){
//     console.log(i);
//     i-=5
// }


//5.Create a program that displays the first 20 elements of the sequence 2 4 8 16 32 64 128…
// let i = 2;
// let count = 0;
// while(count <=20 ){
//     console.log(i)
//     console.log("count", count);
//     i*=2;
//     count+=1;
// }


//6. Display all numbers in the sequence (counter change step) 2a-1, where the initial value is a = 2 and which is less than 10000.
// let res = 1;
// for(){
//
// }


//7. Display all two-digit members of the sequence (counter change step) 2a + 200, where the initial value of the variable a = -166.



// 8. Write a program that calculates exponentiation. The number is entered in the 1st prompt, and the degree in the 2nd prompt. Conditions: The degree can be positive, negative or 0. Calculate all possible variants of the for cycle. It is desirable to perform the task using 1 cycle!
// a^b = a*a b раз;
// a^-b= 1/a^b;
// a^0 = 1;