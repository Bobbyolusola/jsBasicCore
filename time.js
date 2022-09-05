
//const show = () => console.log('TIMEOUT')

//let timeout = () => window.setTimeout(show, 2000)// set time out is always the last to show when run in the browser because of the timimg.
//let timeout =  setTimeout(show, 1000); //without an arrow function, timeout can still run but the nos won't run

//timeout();
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");



// const show = () => console.log('interval')
//
// let interval = setInterval(show, 500)
//
// let timeout = setTimeout(function(){
//     clearInterval(interval)
// }, 5000);
//
// let bodyChild = document.body.children;
//
//     function f1(){
//         let p = document.createElement("p");
//         p.innerHTML="text";
//         document.body.appendChild(p);
//         if(bodyChild.length===5){
//             clearInterval(t);
//         }
//     }
//
//     let t =


// let d = new Date();
// console.log(d);
// console.log(d.getDay());
// console.log(d.getMonth());
// console.log(d.getYear());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());



setInterval(()=>{
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
if(hours < 10) hours = `0${hours}`;
if(minutes < 10) minutes = `0${minutes}`;
if(seconds < 10) seconds = `0${seconds}`;


    document.getElementById("display"). innerText =
        `${hours}:${minutes}:${seconds}`
}, 1000)


