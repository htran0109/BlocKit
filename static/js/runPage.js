/*For dropdown, when clicked, show websites blocked*/

$(document).ready(function() {
	initialize();
})

function showDetails() {
	document.getElementById("detailDropdown").classList.toggle("show");

}
function initialize() {


	$("#webAdd").click(function() {
	$('#websiteText').val("https://");
	});

}


