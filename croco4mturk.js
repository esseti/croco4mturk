//GET url pars


function gup(name) {
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var tmpURL = window.location.href;
	var results = regex.exec(tmpURL); 
	if (results==null)   
		return "";
 	return results[1];
}

//
// This method decodes the query parameters that were URL-encoded
//


function decode(strToDecode) {
	var encoded = strToDecode;
	return unescape(encoded.replace(/\+/g, " "));
}

$(document).ready(function() { 
	//if we are not in Mturk don't to anythin     
	if (gup('hitId')==null)   {
		return;                
		}
	else {        
		$("form input[type=submit]").attr("value", "Submit to MTurk");
      }
		
	//
	// Check if the worker is PREVIEWING the HIT or if they've ACCEPTED the HIT
	//
	if (gup('assignmentId') == "ASSIGNMENT_ID_NOT_AVAILABLE") {
		// If we're previewing, disable the button and give it a helpful message
		$("form input[type=submit]").prop("disabled",true);
		$("form input[type=submit]").attr("value", "You must ACCEPT the HIT before you can submit the results.");
	}

	//this should automatically find the form.  
	$("form input[type=submit]").click(

	function() {                       
		 $("form input[type=submit]").prop("disabled",true); 
		 $("form input[type=submit]").attr("value", "Sending data, please wait");    
		var action = $("form").attr("action");
		//add hitid and assignmentID to form data.
		// hit id is not of mturk class, so it's not stored twice in MTURK results
		var hitId = $('<input/>').attr({ type: 'hidden', id: 'hitID', name: 'hitID', value: gup('hitId')}) ;
	    $("form").append(hitId);    
		var wokerID = $('<input/>').attr({ type: 'hidden', id: 'assignmentId', name: 'assignmentId', value: gup('workerID')});  
		$("form").append(wokerID);
		//assignmetID is of mturk class, so it's store. This is mandatory from MTurk
		var assignmentId = $('<input/>').attr({ type: 'hidden', id: 'assignmentId', name: 'assignmentId', value: gup('assignmentId'),"class": "mturk" });  
	    $("form").append(assignmentId); 
	   
	
		//do an asyn post here  with all the form data to the original URL.
	   	 $.ajax({
			  type: 'POST',
			  url: action,
			  data: $("form").serialize(),
			  success: function(data){                       
								// if the post replies with some data we add them to the form.
								//this is the form that will be sent to MTurk
			                    $.each($.parseJSON(data), function(i,el) {   
									  var input = $('<input/>').attr({ type: 'hidden', id: el.id, name: el.id, value: el.value, "class": "mturk" }) ;
								      $("form").append(input);
								    });
			            },
			  async:false
			});                
			
		//this function just checks where to send the data      
		                 $("form").attr("action",gup(turkSubmitTo));
		// if (document.referrer && (document.referrer.indexOf('workersandbox') != -1)) {
			// $("form").attr("action", "http://workersandbox.mturk.com/mturk/externalSubmit");
		// } else {
			// $("form").attr("action", "http://www.mturk.com/mturk/externalSubmit");
		// }     
		//this is for testenv : set to post2.php the second post and not to mturk     
		// if (typeof testenv === "undefined")       
			// var testenv= false;
		// if (testenv)
			// $("form").attr("action", "post2.php");
			          
		//disable all the fields that does not have to send to mturk.         
		var fields = $('form input:not(.mturk) ');
		fields.prop("disabled", true);
		//this disable also the send, so we have to submit the form to mturk
		$("form").submit();
		//here the form is sent to mturk.
	});
});
