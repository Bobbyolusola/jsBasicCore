// let ball = document.querySelector(".ball");
// console.log(ball);
// console.log(ball.offsetTop);
//
// window.addEventListener('keydown', function(e){
//     if(e.keyCode === 38){
//         let goUp = ball.offsetTop;
//         ball.style.top = goUp - 40 + "px";
//         ball.textContent = "UP";
//     }
//     if(e.keyCode === 40){
//         let goDown = ball.offsetTop;
//         ball.style.top = goDown + 40 + "px";
//         ball.textContent = "Down";
//     }
//     if(e.keyCode === 37){
//         let goLeft = ball.offsetLeft;
//         ball.style.left = goLeft - 40 + "px";
//     }
//     if(e.keyCode === 39){
//         let goRight = ball.offsetLeft;
//         ball.style.left = goRight + 40 + "px";
//     }
// });

let getSel = value => document.querySelector(value);

getSel(".add").onclick = function (){
   document.getElementById("box").setAttribute("class", "box red")
}// the attributes overrides all the class
getSel(".remove").onclick = function (){
    getSel(".box").removeAttribute("class", "box")
}
//BELOW SHOWS WITHOUT USING ATTRIBUTES;

console.log(getSel('.box').classList);

getSel('.add').onclick = function(){
    getSel('.box').classList.add('red', 'big-box') // faster and easiest method.
    // getSel('.box').style.backgroundColor = "red"; //Another way
    // getSel('.box').style.transform = "scale(130%)";
    //console.log(getComputedStyle(getSel('.box')).height) // to get access to each css property
}

getSel('.remove').onclick = function(){
    getSel('.box').classList.remove('red', 'big-box')
}

getSel('.toggle').onclick = function(){ // toogle add and removes a classlist
    getSel('.box').classList.toggle('red') // faster and easiest method.
}
    //let check = getSel(".box").classList.contains("red") // to check "true" or "false" if toggle contains a value.

// //console.log(check);
//     if(check === false){
//         getSel(".box").className += " red";


// }//NOTE: CLASSLISTS RETURNS ARRAYS WHILE CLASSNAMES RETURNS STRINGS. But classLists is the easier method.
