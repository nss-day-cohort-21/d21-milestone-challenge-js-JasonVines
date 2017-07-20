"use strict";

console.log("main.js");


let submitButton = document.getElementById("button");
submitButton.addEventListener("click", checkForm);
let enterTall = document.getElementById("tall");
let enterChar = document.getElementById("char");

	enterTall.addEventListener('keyup', function (event) {
		if (event.which === 13) {
	    checkForm();
		}
	})
	enterChar.addEventListener('keyup', function (event) {
		if (event.which === 13) {
	    checkForm();
		}
	})

function checkForm() {
	if (document.getElementById("tall").value == 0) {
		window.alert("You need to enter values in both fields before your tree can grow.");
	} else if (document.getElementById("char").value == 0) {
		window.alert("You need to enter values in both fields before your tree can grow.");
	}
	tree();
};

function tree(clickEvent) {
	let treeHeight = document.getElementById("tall").value;
	let treeChar = document.getElementById("char").value;
	let myObject = {treeValue:"", numSpaces:""};
	let spaces = 1;
	let count = 1;
	
	for (let i = 1; i < (treeHeight * 2); i = i+2) {
		if (i%2 != 0) {
			myObject.treeValue = treeChar.repeat(count);
			myObject.numSpaces = '\xa0'.repeat(treeHeight - spaces);
			count = count + 2;
			spaces = spaces + 1;
		}
	console.log(myObject.numSpaces + myObject.treeValue);
	}
};

/*let enter = document.getElementById("tall" && "char");
enter.addEventListener('keyup', function (event) {
	// check to see if the enter key was pressed
	if (event.which === 13) {
    //if so, run the tree function
    tree();
	}
});*/
