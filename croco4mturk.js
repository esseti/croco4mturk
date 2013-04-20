//GET url pars


function gup(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = window.location.href;
	var results = regex.exec(tmpURL);
	if (results == null) return "";
	else return results[1];
}

//
// This method decodes the query parameters that were URL-encoded
//


function decode(strToDecode) {
	var encoded = strToDecode;
	return unescape(encoded.replace(/\+/g, " "));
}

$(document).ready(function() {
	//
	// Check if the worker is PREVIEWING the HIT or if they've ACCEPTED the HIT
	//
	if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE") {
		// If we're previewing, disable the button and give it a helpful message
		$("form input[type=submit]").disabled = true;
		$("form input[type=submit]").value = "You must ACCEPT the HIT before you can submit the results.";
	}

	//this should automatically find the form.  
	$("form input[type=submit]").click(

	function() {
		var action = $("form").attr("action");
		//do an asyn post here  with all the form data.
		$.post(action, $("form").serialize());
		if (document.referrer && (document.referrer.indexOf('workersandbox') != -1)) {
			$("form").attr("action", "http://workersandbox.mturk.com/mturk/externalSubmit");
		} else {
			$("form").attr("action", "http://www.mturk.com/mturk/externalSubmit");
		}
		//REMOVE THIS LINE 
		if (testenv)
			$("form").attr("action", "post2.php");               
		$("form").append("<input class=\"mturk\" type=\"hidden\" id=\"assignmentId\" name=\"assignmentId\" value=\"" + gup('assignmentId') + "\">")
		//disable all the fields that does not have to send to mturk.         
		var fields = $('form input:not(.mturk) ');
		fields.attr("disabled", "disabled");
		//this disable also the send, so we have to submit the form to mturk
		$("form").submit();
		//here the form is sent to mturk.
	});
});
