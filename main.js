//Grab input 
var get_text = document.getElementById('regex_btn');
get_text.onclick = function(){
	var regex_text = document.getElementById('your_text').value;
	/*test to see if get text from form:
	window.alert(regex_text);*/
	var email_match = /\w+[\.|\-]?\w+@\w+\.?\w+\.?\w+\b/gi;
	if (regex_text.match(email_match)) {
		/*window.alert("Your text contains at least 1 email.");*/
		var print_matches = (regex_text.match(email_match));
		document.write("Here are the emails I found:<br /> "+print_matches+ "<br />");
	}
	else {
		window.alert("no emails in this string.");
	}
}


