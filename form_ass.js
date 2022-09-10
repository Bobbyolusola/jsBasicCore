
let  t1Text = document.forms.t1;
let getById = (id) => document.getElementById(id);

t1Text.btn.onclick = function () {
    t1Text.lastWord.value = t1Text.firstWord.value;
    t1Text.firstWord.value = "";
}