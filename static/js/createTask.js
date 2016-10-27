/*For dropdown, when clicked, show websites blocked*/

$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}
function initialize() {
	$(".inner-content").click(function(event) {
		var fullCheck = "../images/checkBox.png";
		var emptyCheck = "../images/emptyCheckBox.png";
		
		var target = (event.target.id);
		$this = (target + " img");
		if($this.attr('src') == fullCheck) { 
			$this.attr('src', emptyCheck);
		}
		else {
			$this.attr('src', fullCheck);
		}
	});

	$("#webAdd").click(function() {
	$('#websiteText').val("https://");
	});

}


