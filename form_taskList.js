
document.createElement("input");
function checkIfAlreadyInList(value){ // checking if a list already existed
    if(value === ""){
        return;
    }
    let tasksArr = Array.from(getId("taskList").children)
    return tasksArr.some(item => item.id===value) // checking if a list already existed

   // console.log(getId("taskList").children);

}


function handleAdd(){
    //console.log("click");
    const inputValue = getId('input').value;
    //console.log(inputValue)


    if(checkIfAlreadyInList(inputValue)) {
        showAlready();
        return;
        // // calling the function of list already existed

    }
    inputValue === ""
        ? showEmptyInputError()
        : createPasteListElement(inputValue);
}

window.addEventListener('keyup', (e) => {
        if(e.keyCode === 13) {
            getId("addBtn").click();
        }
        });


const getId = (name) => document.getElementById(name);
function createPasteListElement(taskName){
    //console.log(taskName);
    const p = document.createElement("p"); // paste input element paragraph
    p.style.display = "flex";

    p.id = taskName;

    const input = document.createElement("input"); // paste input element checkbox
    input.type = "checkbox";
    input.onchange = function(){
        this.checked=false;
        getId('taskList').children.length > 2 // condition to remove list on check
        ? getId(taskName).remove()
            : showNotAllowedToRemoveError();
    }


    const span = document.createElement("span"); // paste input element text
    span.innerText = taskName; // To paste the text

    p.appendChild(input);
    p.appendChild(span);

    getId("taskList").appendChild(p);



    //console.log(getId("taskList").children); // to check the children of taskList
    console.log(getId("taskList").children.length); // to check the children of taskList

}

const showEmptyInputError = () => {  // show input error on display flex
    getId("emptyField").style.display = "flex";
    getId("addBtn").disabled = true;
    getId("input").disabled =  true;

}
const arrowClick = () => {
    //console.log("arrow");
    getId("emptyField").style.display = "none"; //show input error on display none
    getId("addBtn").disabled = false;
    getId("input").disabled =  false;
}

function showNotAllowedToRemoveError (){ //show not allowed to remove  on display flex
    getId("removeError").style.display = "flex";
    getId("addBtn").disabled = true;
    getId("input").disabled =  true;
}

const arrowClick2 = () => { //show not allowed to remove  on display flex
    //console.log("arrow");
    getId("removeError").style.display = "none";
    getId("addBtn").disabled = false;
    getId("input").disabled =  false;
}

function showAlready (){ //show already existed on display flex
    getId("alreadyAdded").style.display = "flex";
    getId("addBtn").disabled = true;
    getId("input").disabled =  true;
}

const arrowClick3 = () => { //show already existed on display none
    //console.log("arrow");
    getId("alreadyAdded").style.display = "none";
    getId("addBtn").disabled = false;
    getId("input").disabled =  false;
}
