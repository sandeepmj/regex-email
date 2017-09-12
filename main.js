//declare variables
var regex_text, //holds text inputs
	email_match = /\w+[\.|\-]?\w+@\w+\.?\w+\.?\w+\b/gi, // holds regex for finding emails
	hold_matches = 0, //holds found emails
	numberEmails = 0; // holds number of emails found

$(document).ready(function () { //on DOM ready, bind clicks
	//get value of input field
	$("#regex_btn").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior

		// get info from text field and store in var regex_text
		regex_text = $("#your_text").val();
		console.log(regex_text);
		findEmails(); //run function to find regex matches


	}); // close get value of input fields
}); // close document ready

//function looks like inputted text to find emails using regex.
function findEmails() {
	if (regex_text.match(email_match)) {
		console.log("Your text contains at least 1 email.");
		hold_matches = (regex_text.match(email_match));
		console.log(hold_matches);
		howMany(); //run function to find how many emails
		showIt();

	} else {
		console.log("There are no emails in this text!");
		console.log("I found " + numberEmails + " emails.");
	};
};
//function to find number of emails found
function howMany() {
	numberEmails = hold_matches.length;
	console.log("I found " + numberEmails + " emails.");
}

function showIt() {
	$("#show-emails").text(hold_matches); // plugs found emails into text
	$('#quantity-emails').text(numberEmails); // plugs in number of emails
	$('#show-results').addClass('active');


}
