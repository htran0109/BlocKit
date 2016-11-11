/*For dropdown, when clicked, show websites blocked*/
var data = {};
$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}
function initialize() {


	$("#webAdd").click(function() {
	$("#webAdd").click(function() {
		var webString = $('#websiteText').val();
		var html = $('#blockDropdown').html();
		console.log(html);
		console.log(webString);
		console.log(data);
		data = {"title": webString};
		$.ajax({
			type: 'POST',
			url: '/webAdd',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" type = "checkbox" checked = "checked">';
				html = html + '</input>';
				html = html + '</div>';
				$('#blockDropdown').html(html); 
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
			'class = "dropbtn">' + reply['websites'].length +' Blocked' +
			'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
		'</img>');
				
		//$.post('/webAdd', data);
			}
		});
		
		$('#websiteText').val("https://");

	});
	});
	$("#confirm").click(function() {
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
		$.post('/taskEdit', data);
	});

	$("#delete").click(function() {
		var number = document.getElementById("number").innerHTML;
		data = {'number': number}
		$.post('/taskDelete', data)
	});

}


