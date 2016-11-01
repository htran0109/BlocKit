/*For dropdown, when clicked, show websites blocked*/

$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}
function initialize() {


	$("#webAdd").click(function() {
	$('#websiteText').val("https://");
	});

}


