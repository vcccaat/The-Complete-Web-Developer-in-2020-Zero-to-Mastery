var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.getElementsByClassName("delete");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.className = "delete";

	li.appendChild(deleteButton);
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(deleteButton);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleOnOff(event) {
	// console.log(event.target.tagName)
	if(event.target.tagName === 'LI'){
		event.target.classList.toggle("done")
	}
}

function deleteItem(e) {
	// console.log(event.target.parentElement.tagName)
	if(event.target.parentElement.tagName === 'LI'){
	event.target.parentElement.remove("LI")
}
	
}

function addDeleteButton(button) {
	button.addEventListener("click",deleteItem);
}

function liAddDeleteButton() {
	for (var i=0; i<li.length; i++){
		addDeleteButton(deleteButton[i]);
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleOnOff);

liAddDeleteButton();





