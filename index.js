document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();

    let enterName = document.querySelector("#name").value;
    let enterID = document.querySelector("#docID").value;
    let enterDept = document.querySelector("#dept").value;
    let enterExp = document.querySelector("#exp").value;
    let enterEmail = document.querySelector("#email").value;
    let enterMob = document.querySelector("#mbl").value;

    let obj = {
        enterName,
        enterID,
        enterDept,
        enterExp,
        enterEmail,
        enterMob,
    };

    display(obj);
});

function display(obj) {
    let row = document.createElement("tr");

    let col1 = document.createElement("td");
    col1.innerText = obj.enterName;

    let col2 = document.createElement("td");
    col2.innerText = obj.enterID;

    let col3 = document.createElement("td");
    col3.innerText = obj.enterDept;

    let col4 = document.createElement("td");
    col4.innerText = obj.enterExp;

    let col5 = document.createElement("td");
    col5.innerText = obj.enterEmail;

    let col6 = document.createElement("td");
    col6.innerText = obj.enterMob;

    let col7 = document.createElement("td");
    col7.innerText = "fresher";

    let col8 = document.createElement("td");

    col8.setAttribute("id", "col8")

    let deletebtn = document.createElement("button");

    deletebtn.innerText = "Delete";
    deletebtn.setAttribute("id", "deletebtn")

    deletebtn.style.backgroundColor = "red";

    deletebtn.addEventListener("click", function(e) {
        e.preventDefault();
        deleteRow(row);
    });


    col8.append(deletebtn);

    row.append(col1, col2, col3, col4, col5, col6, col7, col8);

    document.querySelector("tbody").append(row);
}

function deleteRow(row) {
    row.parentNode.removeChild(row);
}



