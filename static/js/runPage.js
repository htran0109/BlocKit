
var data = {};
/*For dropdown, when clicked, show websites blocked*/

$(document).ready(function() {
	initialize();
	console.log("script loaded");
});

function showDetails(extra) {
	console.log(extra);
	extra.classList.toggle("show");
}

function taskDelete(index) {
	console.log(index);
	var number = parseInt(index);
	data = {'number': number}
	$.post('/taskDelete', data)
}

function initialize() {
	/*$("button").click(function(event)){
		console.log("detailDropdown" + event.target.id);
		document.getElementById("detailDropdown" + event.target.id).classList.toggle("show");
	});*/

	$("#tasksButton").click(function {
		$.get('/runPage');

	});
}



