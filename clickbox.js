

function getEl(a) {
    return document.getElementById(a);
}

getEl('container').onmouseover = function (){
    getEl("text").innerHTML = "click";
    this.style.right = "50%";
    this.style.bottom = "50%";

}

getEl('container').onclick = function () {
    getEl("text").innerHTML = "over";
    this.style.right = "70%";
    this.style.bottom = "70%";
}