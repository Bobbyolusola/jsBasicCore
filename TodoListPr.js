
document.createElement("input");


function checkIfAlreadyInList(value){
    if(value === ""){
        return;
    }
    let tasksArr = Array.from(getId("taskList").children)
    return tasksArr.some(item => item.id===value)
}


function handleAdd(){
    //console.log("click");
    const inputValue = getId('input').value;


    //console.log(inputValue);

    // if(inputValue === ""){
    //     showEmptyInputError()
    // }else{
    //     createPasteListElement(inputValue);
    // }

    if(checkIfAlreadyInList(inputValue)) {
        showAlready();
        return;
    }// To check if the function of list already existed

    inputValue === ""
        ? showEmptyInputError()
        : createPasteListElement(inputValue);
}

const getId = (name) => document.getElementById(name);
function createPasteListElement(taskName){
    //console.log(taskName);
    const p = document.createElement("p");
    p.style.display = "flex";

    p.id = taskName;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.onchange = function(){
        this.checked=false;
        getId('taskList').children.length > 2
        ? getId(taskName).remove()
            : showNotAllowedToRemoveError();
    }

    const span = document.createElement("span");
    span.innerText = taskName;

    p.appendChild(input);
    p.appendChild(span);

    getId("taskList").appendChild(p);
    //console.log(getId("taskList").children); // to check the length of TaskList
}

const showEmptyInputError = () => {
    getId("emptyField").style.display = "flex";
    getId("input").disabled = true;
    getId("addBtn").disabled = true;
}
function arrowClick(){
    getId("emptyField").style.display = "none";
    getId("input").disabled = false;
    getId("addBtn").disabled = false;
}

const showNotAllowedToRemoveError = () => {
    getId("removeError").style.display = "flex";
    getId("input").disabled = true;
    getId("addBtn").disabled = true;
}

function arrowClick2(){
    getId("removeError").style.display = "none";
    getId("input").disabled = false;
    getId("addBtn").disabled = false;
}

const showAlready = () => {
    getId("alreadyAdded").style.display = "flex";
    getId("input").disabled = true;
    getId("addBtn").disabled = true;
}

function arrowClick3(){
    getId("alreadyAdded").style.display = "none";
    getId("input").disabled = false;
    getId("addBtn").disabled = false;
}