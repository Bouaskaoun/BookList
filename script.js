var form = document.querySelector("#form");
var title = document.querySelector("#title");
var author = document.querySelector("#author");
var isbn = document.querySelector("#isbn");
var tbody = document.querySelector("#tbody");

form.addEventListener('submit',addBook);
tbody.addEventListener('click',deleteBook);

function addBook(e){
    e.preventDefault();
    var titleValue = title.value;
    var authorValue = author.value;
    var isbnValue = isbn.value;
    if(titleValue && authorValue && isbnValue){
        var tr = document.createElement("tr");
        //for
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");
        td1.append(titleValue);
        td2.append(authorValue);
        td3.append(isbnValue);
        var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn-danger");
        var X = document.createTextNode("X");
        deleteBtn.append(X);
        td4.append(deleteBtn);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tbody.append(tr);
    }
    
}

function deleteBook(e){
    if(e.target.classList.contains("btn-danger")){
       var td = e.target.parentElement;
       var tr = td.parentElement;
       tbody.removeChild(tr);
    }
}