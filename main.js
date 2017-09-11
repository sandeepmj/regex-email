// //Grab input
// var get_text = document.getElementById('regex_btn');
// get_text.onclick = function () {
// 	var regex_text = document.getElementById('your_text').value;
// 	/*test to see if get text from form:
// 	window.alert(regex_text);*/
// 	var email_match = /\w+[\.|\-]?\w+@\w+\.?\w+\.?\w+\b/gi;
// 	if (regex_text.match(email_match)) {
// 		/*window.alert("Your text contains at least 1 email.");*/
// 		var print_matches = (regex_text.match(email_match));
// 		document.write("Here are the emails I found:<br /> " + print_matches + "<br />");
// 	} else {
// 		window.alert("no emails in this string.");
// 	}
// }

var regex_text, //holds text inputs
	email_match = /\w+[\.|\-]?\w+@\w+\.?\w+\.?\w+\b/gi, // holds regex for finding emails
	hold_matches;

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input field
	$("#regex_btn").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// get info from text field and store in var regex_text
		regex_text = $("#your_text").val();
		console.log(regex_text);
		findEmails();

		// 		document.write("Here are the emails I found:<br /> " + print_matches + "<br />");
		// 	} else {
		// 		window.alert("no emails in this string.");
		// 	}

	}); // close get value of input fields
}); // close document ready

//function looks like inputted text to find emails using regex.
function findEmails() {
	if (regex_text.match(email_match)) {
		console.log("Your text contains at least 1 email.");
		hold_matches = (regex_text.match(email_match));
		console.log(hold_matches);
		showIt();
	} else {
		console.log("There are no emails in this text!");
	};

};


function showIt() {
	$("#show-emails").text(hold_matches); // plugs sum into text
	$('#show-results').addClass('active');


}
