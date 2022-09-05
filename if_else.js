//alert("welcome");

/* JS OPERATORS

++a, a++
--a, a--
+, -, /, *, %
=, ==, ===, !, !=, !==
<, >, >=, <=, &&, ||
n+=i, n*=i, n-+i, n/=i
*/

/*let a = 10;
let b = "10";

console.log(a==b);
console.log(a===b);
console.log(a!=b)*/

// let c = false;
// console.log(!c);

/*let a = 10;
let b = 10;
console.log(a<=b);*/

/*let a = 10;
    b = 2;
console.log(a/b);*/

/*//ELSE IF STATEMENT
let n = 100;
if(n>9){
    console.log("More than 9")
    if(n===99){
    console.log("it's 99")
    }
    if(n===100){
    console.log(`it's 100`)
    }
}else{
    console.log("less than 9")
}*/

/*let age = prompt('Enter your age');
if(age===null){
    console.log('You cancelled it')
} else if(age===""){
    console.log("You haven't entered a value")
} else if(age>=18 && age<100){ //both of this conditions has to return true
    console.log("Want whisky and beer?")
} else if(age>100){
    console.log("Want a medicine?")
} else if(age<18 && age>=0){
    console.log("too young for beer")
} else if(age<0){
    console.log("Awaiting you in this world")
} else {
    console.log("You havn't entered a number")
}*/

/*let age = parseInt(prompt('type a numer'));
if (age>10 || age<5){ //one of this conditions has to return true
    console.log('You fall in the range')
} else if(age===7){
    console.log('Your number passed')
} else{
    console.log('You entered no number')
}*/


/*// NOTE: if there are two 'true' conditions on different lines, only the first true condition will be read by the code.
let age = parseInt(prompt('type a number'));
if (age>10){
    console.log('Age is less than 10')
} else if(age<20){
    console.log('Age is less than 20')
} else{
    console.log('You entered no number')
}*/


/*// NOTE: conditions should be written from one stage to another, just like age<=10 and next is age>=11 && age<20 and next is age>20 && age<30
let age = parseInt(prompt('type a number'));
if (age<=10){
    console.log('Age is less than 10')
} else if(age>=11 && age<20){
    console.log('Age is less than 20')
} else if(age>20 && age<30){
    console.log('Age is less than 30')
} else{
    console.log('You entered no number')
}*/


//ASSIGNMENTS

/*//1. Write a test on any topic with 10 questions. If the user answers correctly, we add a point.
 If the answer is incorrect then do nothing. At the end we display statistics on the number of correct answers out of a possible 10.
 And a message to the user about the level of knowledge about the points scored.

let count = 0;

let question1 = prompt('What is the name of your city?');
let answer1 = ("lviv");

if (question1 === answer1) {
    count = count + 1
}

let question2 = prompt('what college did you attend?');
let answer2 = ("logos")

if (question2 === answer2) {
    count = count + 1
}

let question3 = prompt('what is the name of your mother?');
let answer3 = ("maria")

if (question3 === answer3) {
    count = count + 1
}

let question4 = prompt('what is your favorite color');
let answer4 = ("white")

if (question4 === answer4) {
    count = count + 1
}

let question5 = prompt('what is your favorite food');
let answer5 = ("dumplings")

if (question5 === answer5) {
    count = count + 1
}
console.log(`You have ${count} correct answers`);
*/


/*//2. If the user enters "Name", ask for the password, if you click escape - display "Login canceled",
if you enter something else - "I do not know you". Password check yes. If the password "LOGOS" is entered, then display "Welcome!",
Otherwise - "Password is incorrect", when canceling - "Login canceled".
----------------------------------------
let name = prompt('Enter your name');
let password;
console.log(name);
if (name === null ){
    console.log('You cancelled')
}else if(name === ''){
    console.log("I don't know you")
}else{
    password = prompt('Enter your password')
    if (password === 'logos'){
        console.log('Welcome')
    } else if(password === null || password === '') {
        console.log('No password')
    } else{
        console.log('Wrong Password')
    }
}
*/


/*//3. Write a program that gives the user to enter a number. After entering the number,
an alert pops up announcing the time of year to which the number (month number) entered by the user belongs.
If the number does not fall in the range from 1 to 12 then it is impossible.

let number = parseInt(prompt('Enter a number'));
if(number === 1){
    alert('Welcome to the Month of January')
}else if(number === 2){
    alert('Welcome to the Month of February')
}else if(number === 3){
    alert('Welcome to the month of March')
}else if(number === 4){
    alert('Welcome to the month of April')
}else if(number === 5){
    alert('Welcome to the month of May')
}else if(number === 6){
    alert('Welcome to the month of June')
}else if(number === 7){
    alert('Welcome to the month of July')
}else if(number === 8){
    alert('Welcome to the month of August')
}else if(number === 9){
    alert('Welcome to the month of September')
}else if(number === 10){
    alert('Welcome to the month of October')
}else if(number === 11){
    alert('Welcome to the month of November')
}else if(number === 12){
    alert('Welcome to the month of December')
}else{
    alert('This is impossible');
}*/










