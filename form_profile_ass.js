
let femaleImg = "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_1280.png";
let maleImg = "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg";

let form = document.forms['form'];

let getById = (id) => document.getElementById(id);

form.submit.onclick = function () {
    let user = {
        firstName: form.fname.value,
        lastName: form.lname.value,
        email: form.user_email.value,
        gender: form.gender.value,
        positions: form.positions.value,
        agree: form.agree.checked,
    }

    //console.log(user);
    if(user.firstName !== "" && user.lastName !== "" && user.gender !== ""){
        getById("signedIn").children[0].src =
            user.gender === "female" ? femaleImg : maleImg
        getById("signedIn").children[1].innerHTML = `${user.firstName} ${user.lastName}`;
        getById("signedIn").children[2].innerHTML = `${user.email}`;
        getById("signedIn").children[3].innerHTML = `${user.gender}`;
        getById("signedIn").children[4].innerHTML = `${user.positions}`;
        getById("signedOut").style.display = "none";
        getById("signedIn").style.display = "block";
        getById("error").style.display= "none";
        getById("error").innerText = "";

    }else{
        getById("error").style.display= "block";
        if(getById("error").innerText !== "Fields are required"){
            getById("error").innerText = "Fields are required"
        }
    }

    //console.log(getById("signedIn").children)
}
getById("signOutBtn").onclick = () => {
    getById("signedOut").style.display = "block";
    getById("signedIn").style.display = "none";
    form.reset();

}