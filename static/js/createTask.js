
var data = {};
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
		console.log(data);
		data = {"title": webString};
		$.post('webAdd/', data);
		$('#websiteText').val("https://");
	});

}


