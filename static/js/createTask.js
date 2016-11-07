/*For dropdown, when clicked, show websites blocked*/
$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}
function initialize() {


	$("#webAdd").click(function() {
	var webString = $('#websiteText').val();
	console.log(webString);
	data['websites'].push({"title": "test"});
	$('#websiteText').val("https://");
	});

}


