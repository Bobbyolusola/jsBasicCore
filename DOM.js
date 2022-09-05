//console.log(document);
//console.log(document.body);
//console.log(document.body.childNodes);
//console.log(document.body.firstChild);
//console.log(document.body.lastChild);
//console.log(document.body.childNodes[2]);
//console.log(document.body.childNodes[2].previousSibling);
//console.log(document.body.childNodes[1].nextSibling);


//console.log(document.body.children); // Doesn't show the inner tags
//console.log(document.body.children[2])
//console.log(document.body.firstElementChild);
//console.log(document.body.lastElementChild);
//console.log(document.body.children[2]. nextElementSibling);

//console.log(document.body.children[2].parentElement);
//console.log(document.body.children[2].innerHTML);
//console.log(document.body.children[2].textContent);



//ACCESS ELEMENT BY ID

// const getEl = (id) => document.getElementById(id); // This fxn can be called anytime its needed.
// let box = getEl("box");
// console.log(box);
//
// box.innerHTML = `<h2>Not a box</h2>`

// let link = document.getElementById("link");
// const getEl = (id) => document.getElementById(id);
// let link = getEl("link");
// link.innerHTML = "google";
// link.href = "https://www.ukr.net/";
// link.target = "_blank"
// link.style.color = "red"
// link.style.fontSize = "30px"


//ACCESS ELEMENT BY CLASS NAMES

// const getEl = (id) => document.getElementsByClassName("text");
// let text = getEl("text");
// console.log(text);
// console.log(text.length);
//
// text[0].style.color = "orange";
// text[1].style.color = "green";
//
// for(let i = 0; i < text.length; i++){
//     text[i].style.color = 'green';
// }

// for(let i = 0; i<text.length; i++){
//     text[i].style.color = i%2 === 0 ? 'green' : "red";
// }// If is divided by 2 and equals to zero, then green, else not equals to zero color red.

// let textColor1 = prompt('write a color');
// let textColor2 = prompt('write another color');
//
// for(let i = 0; i<text.length; i++) {
//     text[i].style.color = i % 2 === 0 ? textColor1 : textColor2;
// }

// let number = 5;
// let answer = number > 1 ? "more" : number < 1  ? "less" : "one"; // The full explanation is shown below
//
// // if(number > 1){
// //     answer = "more"
// // } else if(number < 1 ){
// //     answer = "less"
// // } else{
// //     answer = "one"
// // }
// console.log(answer);


//ACCESS ELEMENT BY TAG NAMES
// const getEl = (li) => document.getElementsByTagName('li');
// let li = getEl("li");
// console.log(li);
// let size = 15;
// for(let j = 0; j<li.length; j++){
//     li[j].style.color = 'red';
//     li[j].textContent = `New item with index ${j}`;
//     li[j].style.fontSize = size + 'px';
//     size++;
// }

//ACCESS ELEMENT BY QUERY SELECTOR

// let text1 = document.querySelector('.text'); // selects the first element
// console.log(text1)

// let text1 = document.querySelectorAll('.text'); // selects all the element
// console.log(text1);

// let text1 = document.getElementById("box").querySelector('.text'); // selects all the element
// console.log(text1)

//ASSIGNMENT.
// my favorite sites are: google w3schools stackoverflow
//
// Use JavaScript to prompt the user to choose a style for the page. Namely:
// background for the page
// the type of font on the page
// alignment for the h1 header
// background for the reference paragraph
// the color of the text in the paragraph with links and for the links themselves. Why assign the color of the text for the links in a cycle
// color, size, thickness of the text in the div element
// bullet type for a bulleted list on a page
// Thus, the user should be prompted to enter ten page settings and apply them.
//     APPENDIX TO THE TASK: instead of links to specific sites, display links to three sites specified by the user in the navigation panel.
//     For example, the user entered the address football24.ua in the prompt() window - in this case, you need to create a link that would lead
//     to the football24 website, and the text of this link (what you can click on) will also be football24.ua

//SOLUTION.
// let backgroundColor = prompt("type a color");
// let fontSize = prompt("type a font");
// let alignH1 = prompt("align h1");
//let refBackGround = prompt('refbackGround');
//let textColor = prompt('text color');
//
//  const getEl = (value) => document.getElementById(value);

//
// getEl('body').style.backgroundColor = backgroundColor ;
// getEl('body').style.fontSize = `${fontSize}px` ;
 //getEl("header").style.textAlign = alignH1;
 //getEl("header").style.color = refBackGround;
 //getEl("parag").style.color = textColor;

// let firstLinkText = prompt('type firstlinktext');
// let firstLinkHref = prompt('type firstlinkHref');
// let target = prompt('target');

// let secondLinkText= prompt('type secondlinktext');
// let secondLinkHref= prompt('type secondlinkHref');
// let secondTarget= prompt('secondtarget');


// console.log(document.body.getElementsByTagName('p')[0].children); //To get the precise text location
// document.body.getElementsByTagName('p')[0].children[0].textContent = firstLinkText;
// document.body.getElementsByTagName('p')[0].children[0].href = firstLinkHref;
// document.body.getElementsByTagName('p')[0].children[0].target = target;

// document.body.getElementsByTagName('p')[0].children[1].textContent = secondLinkText;
// document.body.getElementsByTagName('p')[0].children[1].href = secondLinkHref;
// document.body.getElementsByTagName('p')[0].children[1].target = secondTarget;


//TOPIC: ON CLICK

const getEl = (value) => document.getElementById(value);

// getEl('container').onclick = function(event){
//     this.style.backgroundColor = "yellow"; // this.style is used in function declaration
// }

// getEl("container").onclick = (event) => {
//     getEl('container').style.backgroundColor = "grey"; // this.style does not work for arrow fnx. only the value container works.
// }

let countOver = 0;
let countOut = 0;
let countMove = 0;

// getEl('container').onmouseover = function(){
//     this.style.background = 'red';
//     this.style.width = '300px';
//     this.style.height = '300px';
//     this.textContent = 'Over';
//     countOver++;
//     console.log('onmouseover =', countOver)
// }
//
// getEl('container').onmouseout = function(){
//     this.style.background = 'yellow';
//     this.style.width = '200px';
//     this.style.height = '200px';
//     this.textContent = 'Out';
//     countOut++;
//     console.log('onmouseOut =', countOut);
// }

// getEl('container').onmouseup = function(){  //OLD WAYS
//     this.style.background = 'red';
//     this.style.width = '300px';
//     this.style.height = '300px';
//     this.textContent = 'Over';
//     // countOver++;
//     // console.log('onmouseup =', countOver)
// }
// getEl('container').onmousedown = function(){
//     this.style.background = 'yellow';
//     this.style.width = '200px';
//     this.style.height = '200px';
//     this.textContent = 'Out';
//     countOut++;
//     console.log('onmouseDown =', countOut);
// }
// NOTE: If you have the same events for 2 different functionalities, the last event will work. Just like css 'header.name', name functions will work.
// NOTE: Create one Event and you can input many counts of conditions as you want inside it.

// getEl('container').addEventListener('mouseover', function(){ //NEW WAYS
//     this.style.background = 'green';
//     this.style.width = '300px';
//     this.style.height = '300px';
//     this.textContent = 'Over';
// });

// getEl('container').onclick = function(event) { // To get the cordinates of the onclicked
//     console.log(event.clientY + " " + event.clientX);
// }
//
// getEl('container').onmousemove = function(event) { // Another way To get the cordinates of the onclicked
//     console.log(event.clientY + " " + event.clientX);
// }

let input = document.querySelector('input[type="text"]')
input.onfocus = function(){
    getEl('container').style.background = 'grey';
}
input.onblur = function(){
    getEl('container').style.background = 'yellow';
}
input.onchange = function(){
    console.log('works');
}