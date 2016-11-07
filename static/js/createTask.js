
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
		$.post('/webAdd', data);
		$('#websiteText').val("https://");
	});

	$("#create").click(function() {
		var taskName = $('#taskName').val();
		var dueDate = $('#dueDate').val();
		var hours = $('#hours').val();
		var minutes = $('#minutes').val();
		var notes = $('#notes').val();
		var number = document.getElementById("number").innerHTML;
		console.log(number);
		number = parseInt(number);
		console.log(taskName + "\n" + dueDate + "\n" + hours + "\n" + minutes + "\n" + notes + "\n" + number);
		data = {"title": taskName, "id": "id"+number, "number":number, 
		"dropDown": "detailDropdown"+number, "due_date":dueDate, "hours":hours, "minutes":minutes, "notes":notes}
		$.post('/taskAdd', data);
	});

}


