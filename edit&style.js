
const getEBI = (name) => document.getElementById(name);

const handleEdit = () => {
    //alert("works");
    //console.log(getEBI("innerBox1").innerHTML);
    getEBI("editContainer").style.display = "flex";
    getEBI("styleContainer").style.display = "none";
    getEBI("editArea").value = getEBI("innerBox1").innerHTML;
}


const handleEditSaveBtnClick = () => {
    //alert("works");
    getEBI("innerBox1").innerHTML = getEBI("editArea").value;
    getEBI("editArea").value = "";
    getEBI("editContainer").style.display = "none";
}

const handleStyle = () => {
    getEBI("editContainer").style.display = "none";
    getEBI("styleContainer").style.display = "flex";
    getEBI("subStyleContainer").style.display = "flex";
}

const fontForm = document.forms[0];
const familyForm = document.forms[1];
const addForm = document.forms[2];
const addTableForm = document.forms[3];
const addListForm = document.forms[4];

const fontform = document.forms[0];

fontForm.addEventListener("change", (e) => {
    getEBI("innerBox1").style.fontSize = e.target.value
});

familyForm.addEventListener("change", (e) => {
    getEBI("innerBox1").style.fontFamily = e.target.value
});

const handleTextColor = () => {
    //console.log("works");
    getEBI("textAl").style.display = "flex";
    getEBI("bgAl").style.display = "none";
}
const changeFontColor = (color) => getEBI("innerBox1").style.color = color;

const handleBgColor = () => {
    //console.log("works");
    getEBI("bgAl").style.display = "flex";
    getEBI("textAl").style.display = "none";
}
const changeBgrndColor = (color) => getEBI("innerBox1").style.backgroundColor = color;


const handleEditAddBtnClick = () => {
    //alert("works");
    getEBI("addContainer").style.display = "block";
    getEBI("box1").style.display = "none";
    getEBI("editStyle").style.display = "none";
    getEBI("editContainer").style.display = "none";
    getEBI("styleContainer").style.display = "none";
    getEBI("addList").style.display = "none";
}

addForm.addEventListener("change", (e) => {
    getEBI("addContainer").style.display = "block";

    //console.log(e.target.value);
    if(e.target.value === "table"){
        getEBI("addTable").style.display = "block"
        getEBI("addList").style.display = "none"
    }else{
         getEBI("addTable").style.display = "none"
        getEBI("addList").style.display = "block";
    }
})

const addElementHideEdit = (element) => {
    getEBI("innerBox1").appendChild(element)
    getEBI("box1").style.display="flex";
    getEBI("editStyle").style.display="block";
    getEBI("addList").style.display="block";
    getEBI("addContainer").style.display="none";
}

const createTable = (form) => {
    const table = document.createElement("table")
    const tbody =  document.createElement("tbody")
    for(let  i = 0; i<form.countTr.value; i++){
        const row = document.createElement("tr")
        for(let j = 0; j<form.countTd.value; j++){
            const td = document.createElement("td")
            td.innerText = "TD"
            td.style.width = `${form.width.value}px`
            td.style.height = `${form.height.value}px`
            td.style.border = `${form.border.value}px solid red`
            td.style.color = form.colors.value
            row.appendChild(td)

        }
        tbody.appendChild(row);
        table.style.borderCollapse="collapse";
        table.appendChild(tbody);
        //console.log(tbody)
        addElementHideEdit(table)
        getEBI("innerBox1").style.backgroundColor="lightgrey";

    }

}

const createList = (form) => {
    // console.log(form.liCount.value);
    // console.log(form.liType.value);
    const ul = document.createElement("ul")
    for(let i = 0; i < form.liCount.value; i++){
        const li = document.createElement("li");
        li.style.listStyleType = form.liType.value
        li.innerHTML = `item ${i+1}`
        ul.appendChild(li)
    }
    addElementHideEdit(ul)

}

addTableForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("addTableForm")
    //console.log(addTableForm.tr.value)
    createTable(addTableForm)

})

addListForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log("addList")
    createList(addListForm);
})




