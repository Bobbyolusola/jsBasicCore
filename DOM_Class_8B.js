
let getSel = value => document.querySelector(value);
let getId = value => document.getElementById(value);

function highLightItem(e){
    if(getId(e.keyCode.toString()) !== null){
        getId(e.keyCode.toString()).classList.add('active');
}
    if(getId(e.keyCode.toString()) !== null && e.keyCode === 9){
        getId(e.keyCode.toString()).classList.remove('active')
    }
}

function darkItem(e){
    getId(e.keyCode.toString()) !== null
    && getId(e.keyCode.toString()).classList.remove('active');
}

window.addEventListener('keydown', highLightItem);
window.addEventListener('keyup', darkItem);

