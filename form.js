//
//
// let f1 = document.forms["f1"]; //best one to use
// //let f1 = document.forms.f1;
// //let f1 = document.forms[0];
//
// f1.name = "form1"
// // console.log(f1);
// // console.log(f1.tt.value);
// // console.log(f1.tp.value);
// // console.log(f1.tc.value);
//
// f1.tb.onclick = function () {
//     let name = f1.user.value;
//     let checkbox = f1.tc.checked;
//     let pass = f1.tp.value;
//     //console.log(name, pass, checkbox)
//     let user = { // To send to backend
//         name: name,
//         password: pass,
//         checked: checkbox
//     }
//     console.log(user);
//
//
// //After receiving status from backend, needs to clear the form.
// //as shown below;
//
//     // f1.user.value = "";
//     // f1.tc.checked = 'false';
//     // f1.tp.value = "";
//
//     f1.reset();// another way to clear after sending to backend
//
//     //f1.user.placeholder = "success";
//
//     f1.user.disabled = true;// to disable the user from typing in the form
//     f1.tc.disabled = true;
//     f1.tp.disabled = true;
//     f1.tb.disabled = true;
//
//     setTimeout( ()=>{ // timeout for the disable to takeplace
//         f1.user.disabled = false;
//         f1.tc.disabled = false;
//         f1.tp.disabled = false;
//         f1.tb.disabled = false;
//     }, 2000)
// }

// //FORM 2.
//
// let f2 = document.forms["f2"];
// // console.log(f2.elements); // shows the input
// // console.log(f2.children); // shows all information
// // console.log(f2.tr); // shows all names like all inputs
//
// for (let i = 0; i < f2.length; i++) {
//     f2.elements[i].addEventListener('click', function () {
//         document.body.style.background = this.value
//     })
// }

//FORM 3.

// let f3 = document.forms['f3'];
// //console.log(f3.children)// to get access to the label html
// f3.ch.addEventListener('click', function () {
//     if(this.checked){
//         document.querySelector('.form-box').style.display = 'none';
//         f3.children[0].innerHTML = 'Show';
//     }
//     else {
//         document.querySelector('.form-box').style.display = 'block';
//         f3.children[0].innerHTML = 'Hide';
//     }
// })


// //FORM 4.

// let f4 = document.forms['f4'];
// //console.log(f4.colors.options[1].text) // to access the options
//
// f4.colors.onchange = function () { // select tags works with onchange
//     for (let i = 0; i < f4.colors.options.length; i++) {
//         if (f4.colors.options[i].selected){
//             document.body.style.background = this.value;
//         }
//     }
// }
//
// //FORM 5
//
let f5 = document.forms['f5'];
f5.change.oninput = function () {
    document.getElementById('result').innerHTML = this.value
}

