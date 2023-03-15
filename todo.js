const input = document.querySelector("input");
const lis = document.querySelector("#list");
const btn = document.querySelector("button");

var mylist = document.getElementsByTagName("li");
for (var i = 0; i < mylist.length; i++) {
    addCloseButton(mylist[i]);
    addEditButton(mylist[i]);
}

function addCloseButton(item) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("Delete");
    span.className = "close";
    span.appendChild(text);
    item.appendChild(span);
    span.onclick = function () {
        item.style.display = "none";
    }
}

function addEditButton(item) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("Edit");
    span.className = "edit";
    span.appendChild(text);
    item.appendChild(span);
    span.onclick = function () {
        var input = document.createElement("input");
        input.value = item.firstChild.textContent;
        item.replaceChild(input, item.firstChild);
        var saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        item.appendChild(saveButton);
        saveButton.onclick = function () {
            item.replaceChild(document.createTextNode(input.value), input);
            item.removeChild(saveButton);
        }
    }
}

function addList() {
    var listItem = document.createElement("li");
    var input = document.querySelector("#inp").value;
    var inputText = document.createTextNode(input);
    listItem.appendChild(inputText);
    if (input === "") {
        alert("Please enter a title.");
    } else {
        document.getElementById("list").appendChild(listItem);
        addCloseButton(listItem);
        addEditButton(listItem);
    }
    document.getElementById("inp").value = "";
}