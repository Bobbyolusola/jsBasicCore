let form = document.forms['form'];

let getById = (id) => document.getElementById(id);
// const myInput = document.getElementById("pass");
// const letter = document.getElementById("letter");
// const capital = document.getElementById("capital");
// const number = document.getElementById("number");
// const length = document.getElementById("length");

form.submit.onclick = function () {
    let user = {
        firstName: form.fname.value,
        lastName: form.lname.value,
        email: form.user_email.value,
        phone: form.phoneNo.value,
        password: form.pWord.value,
    }
       console.log(user);
    if(user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.phone !== "" && user.password !== "") {
        // getById("signIn").children[0].innerHTML = `${user.firstName} ${user.lastName}`;
        // getById("signIn").children[1].innerHTML = `${user.email}`;
        // getById("signIn").children[2].innerHTML = `${user.phone}`;
        // getById("signIn").children[3].innerHTML = `${user.password}`;
        // getById("error").innerHTML = "";
        alert('works');

        }else{
        if(form.fname.value === ""){
            getById('errorfname').style.display= "block";
            getById("errorfname").innerText = "* First Name is required";
        }
        if(form.fname.value !== ""){
            getById('errorfname').style.display = "none";
        }


        if(form.lname.value === ""){
            getById('errorlname').style.display= "block";
            getById("errorlname").innerText = "* Last Name is required";
        }
        if(form.lname.value !== ""){
            getById('errorlname').style.display = "none";
        }


        if(form.user_email.value === ""){
            getById("errormail").style.display = "block";
            getById("errormail").innerText = "* Email is required";
        }
        if(form.user_email.value !== ""){
            getById("errormail").style.display = "none";
        }


        if(form.phoneNo.value === ""){
            getById("errorphone").style.display = "block";
            getById("errorphone").innerText = "* Phone number is required";
        }
        if(form.phoneNo.value !== ""){
            getById("errorphone").style.display = "none";
        }

        if(form.pWord.value === ""){
            getById("errorpass").style.display = "block";
            getById("errorpass").innerText = "* Password is required";
        }
        if(form.pWord.value !== ""){
            getById("errorpass").style.display = "none";
        }
        // if(form.value.length <= 8 ){
        //     console.log(form.value.length);
        //     getById("errorpass").style.display = "block";
        //     getById("errorpass").innerText = "* Password length must be more than 8 characters";
        // }

        // getById("error").style.display= "block";
        // if(getById("error").innerText !== "Fields are required"){
        //     getById("error").innerText = "Fields are required"
        // }
    }

}

    //
    // const myInput = document.getElementById("pass");
    // const letter = document.getElementById("letter");
    // const capital = document.getElementById("capital");
    // const number = document.getElementById("number");
    //  const length = document.getElementById("length");
    //
    // // When the user clicks on the password field, show the message box
    // myInput.onfocus = function(){
    // document.getElementById("message").style.display = "block";
    // }
    //
    // // When the user clicks outside of the password field, hide the message box
    // myInput.onblur = function () {
    //     document.getElementById("message").style.display = "none";
    // }
    //
    // // When the user starts to type something inside the password field
    // myInput.onkeyup = function(){
    //     // Validate lowercase letters
    //     let lowerCaseLetters = /[a-z]/g;
    //     if(myInput.value.match(lowerCaseLetters)){
    //         letter.classList.remove("invalid");
    //         letter.classList.add("valid");
    //     }else{
    //         letter.classList.remove("valid");
    //         letter.classList.add("invalid");
    //     }
    //
    //     // Validate capital letters
    //     let upperCaseLetters = /A-Z/g;
    //     if(myInput.value.match(upperCaseLetters)){
    //         capital.classList.remove("invalid");
    //         capital.classList.add("valid");
    //     }else{
    //         capital.classList.remove("valid");
    //         capital.classList.add("invalid");
    //     }
    //
    //     // Validate numbers
    //     let numbers = /0-9/g;
    //     if(myInput.value.match(numbers)){
    //         number.classList.remove("invalid");
    //         number.classList.add("valid");
    //     }else{
    //         number.classList.remove("valid");
    //         number.classList.add("invalid");
    //     }
    //
    //     // Validate length
    //     if(myInput.value.length >= 8) {
    //         length.classList.remove("invalid");
    //         length.classList.add("valid");
    //     } else {
    //         length.classList.remove("valid");
    //         length.classList.add("invalid");
    //     }
    //
    // }


