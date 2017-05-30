
// If the 'result' element for the custom message does not yet exist; create it, otherwise, clear it for the next message

function createResult() {

	if(!(document.getElementById("result"))) {
		var resultBlock = document.createElement("div");
		resultBlock.id = "result";
		
		document.getElementById("myForm").appendChild(resultBlock);
		
	} else {
		document.getElementById("result").innerHTML = '';
	}

}

// Grab form data and generate custom message

function processForm() {

	document.getElementById("example").onsubmit = function() {	

		createResult();

		var reply = document.getElementById("result");
		var input = document.getElementById("example");

		var first = input.first.value;
		var middle = input.middle.value;
		var last = input.last.value;

		var name = first;

		if ( !(middle == '') ) {
			name += " " + middle + ".";
		}

		name += " " + last;

		var nameResult = document.createElement("p");
		var gender = $('input[name=gender]:checked', '#example').val();

		var resultText = "Hello, " + name + "!\n";

		if ( gender == 'nb' ) {
			resultText += "Your gender identity is non-binary!"
		} else {
			resultText += "You identify as a " + gender + "!"
		}
	
		reply.appendChild(nameResult);
		nameResult.appendChild(document.createTextNode(resultText));

		window.getComputedStyle(nameResult).opacity;
		nameResult.className = 'appear';

		input.first.value = "", input.middle.value = "", input.last.value = "";
		return false;
	};
		
}

window.onload = function() {
	processForm();
}

