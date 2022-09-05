
let  t1 = document.forms.t1;
let getById = (id) => document.getElementById(id);

t1.btn.onclick = function () {
    t1.lastWord.value = t1.firstWord.value;
    t1.firstWord.value = "";
}