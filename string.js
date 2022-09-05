//const name = "Bobby";
//console.log(name.length) //5. Counts the lengths into numbers and starts from 1
//console.log(name.charAt(2))// b . charAt starts counts from 0.
//console.log(name.charAt(name.length-1))// y . charAt starts counts from 0.
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.toUpperCase(). toLowerCase(). charAt(2));


// let s = prompt("Enter a name");
// console.log(s);
//         let res = s.charAt(0).toUpperCase();
//         for(let i=1; i<s.length;i++) {
//            res =  res + s.charAt(i);
//         }
//         console.log(res);

//const name = "Ihor";
// console.log(name.indexOf("I")) // 0 //
// console.log(name.indexOf("i")) // -1 // cos lowercase i is not found in Ihor as indexOf is case sensitive.
// console.log(name.indexOf("b")) // -1 // cos b is not in the variable name Ihor

//html css
// let s = prompt("Enter html or css");
// s = s.toLowerCase();// entered words will be changed to lower case
//     if(s.indexOf("html") !=-1 || s.indexOf("css") !=-1){
//         console.log("Text is found")
// } else {
//         console.log("Not found")
// }

// const name =  "Bobby";
// // B o b b y
// // 0 1 2 3 4
// console.log(name.indexOf("o", 1)) // 1 // means look for "o" starting from 1

// let s = "Hello world";
//         let start = 0;
//         while(true){
//             let res = s.indexOf("l",start);// means look for "l" from the first position of the letter
//             if(res==-1)break; // if result is not found
//             console.log(res);
//             start = res+1;
//         }

// const name =  "Bobby";
// console.log(name.substring(1)); //
// console.log(name.substring(1, 3));

// const name =  "HelloWorldBobby";
// console.log(name.substring(5, -2)); //hello //cos -2 is not found
// console.log(name.substring(0, 5)); //hello //

// let str1 = 'Javascript';
// console.log(str1);
// console.log(`substr (4,2)`, str1.substr(4,5)); // scrip // start from count 4 and end at length 5
// console.log(`substr (-4,2)`, str1.substr(-4,2)); // ri // start from count the right to the left and count just 2 lengths

// let str1 = 'Javascript';
// console.log(str1);
// console.log(`slice (4,7)`, str1.slice(4,7)); // scr // length count 4 is sliced out and count after 7 is sliced out too
// console.log(`slice (4,-2)`, str1.slice(4,-2)); // scri // length count 4 is sliced out and after count 5 is sliced out too
// //NOTE: Negative values are read from the right to the left, while positive values are vice versa.

// let str1 = 'Javascript HTML CSS';
// console.log(str1);
// console.log(str1.split(' '))
// console.log(str1.split(''))
// console.log(str1.split(''))
// console.log(str1.includes("HTML")) //True cos Uppercase HTML is not present
// console.log(str1.includes("css")) //False cos lowercase css is not present
// console.log(str1.endsWith("CSS")) //True cos Uppercase css ends it
// console.log(str1.endsWith("s")) //False cos it doesn't end with loercase s
// console.log(str1.startsWith("J")) //True cos it starts with J
// console.log(str1.startsWith("s")) //False cos it doesn't start with s


//ASSIGNMENT.
//1. The user enters text in the prompt. You need to count and display the number of spaces that have been entered.
// let text = prompt("Enter a text");
// let spaces = text.split(' ').length -1;
// console.log(spaces);

//2.The user enters the email. You need to check the data for correctness of input. A correctly entered email is one that contains the @ symbol. In addition, the @ character cannot be at the beginning of the text or at the end.
// Example of correctly entered data:
// student@ukr.net
// Example of incorrectly entered data:
// @ student.ukr.net
// student.ukr.net @
// student.ukr.net

//ANS.
// let mail = prompt("Enter student@ukr.net")
// if(mail.indexOf("student@ukr.net") !==-1){
//     console.log("Correct email")
// }else{
//     console.log("Incorrect email")
// }


//3. The person enters text that contains the word html (html can occur in the text several times). You need to display the total number of html words in the entered text in the console.
// Example of work:
// The user enters: “Text html javascript html css” - 2 is displayed in the console.

// let s = prompt("Enter any sentence with html");
// console.log(s);
//     let start = 0;
//     while(true){
//         let res = s.indexOf("html", start);
//         if( res == -1) break;
//         console.log(res);
//         start = res + 1;
//     }


//4. The user enters the URL in the prompt in http or https format. Print only the domain name without the http: //, https: // prefixes in the console.
// Example of work:
// The user enters: "https://www.google.com" - www.google.com is displayed in the console.
// The user enters: "http://www.w3schools.com" - w3schools.com is displayed in the console.

// let web = prompt("Enter an https:// with a website");
// console.log(web);
// console.log( web.slice(8));
