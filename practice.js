var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function addListItems() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
}


function createListAfterClick() {
	if (inputLength() > 0) {
			addListItems();
			deleteButton();
		}
}

function createListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {
			addListItems();
			deleteButton();
		}
}

button.addEventListener("click", createListAfterClick);

input.addEventListener("keypress", createListAfterKeypress);


ul.onclick = function(event) {
	var target = event.target;
		target.classList.toggle("done");
}

function listLength() {
	return listItems.length;
}

// creating delete function!!!

function deleteButton() {
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		listItems[i].appendChild(btn);
		btn.onclick = removeParent;
}

// using loop to automatically add delete button!!!

for (i = 0; i < listLength(); i++) {
	deleteButton();
}

// to remove parent, the funtion going to be used!!

function removeParent(evt) {
	evt.target.parentNode.remove();
}