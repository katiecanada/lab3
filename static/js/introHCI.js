'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("New Button Name");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(submitForm);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function submitForm(e){
	var newDescription = $("#description").val();
	var proj = $("#project").val();
	$(proj).animate({
		width:  $("#width").val()
	});
	$(proj + " .project-description").text(newDescription);
}

function projectClick(e){
	// Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
     var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
      	$(".project-description").hide();
   	 }
}