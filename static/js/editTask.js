/*For dropdown, when clicked, show websites blocked*/
var data = {};
$(document).ready(function() {
	initialize();
})

function showBlocked() {
	document.getElementById("blockDropdown").classList.toggle("show");

}

function webCheck(number) {
	
    var checkId = "checkBox" + number;
    console.log(checkId);
	var html = $('#blockDropdown').html();
	data = {"number":number};
	if(!$('#' + checkId).is(":checked")) {
		$.ajax({
			type: 'POST',
			url: '/webDelete',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				/*html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" type = "checkbox" checked = "checked">';
				html = html + '</input>';
				html = html + '</div>';*/
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
				
				$('#website'+number).html('');
				$('#website'+number).removeClass('inner-content');
				$('#website'+number).attr('id',"");
				$('.inner-content').each(function(index) {
			      
                  $(this).attr("id","website" + index);
                  
				});
				$('.checkBox').each(function(index){
				  
                  //$(this).html('<input class = "checkBox" id = "checkBox' + index + '"type = "checkbox" {{checked}} onclick = "webCheck(' +index+')">');
                  $(this).attr("onclick","webCheck(" + index + ")");
                  $(this).attr("id","checkBox"+index);
                  
				  console.log(index);
				});
			}
		//$.post('/webAdd', data);
	});
	}
	else {
		$.ajax({
			type: 'POST',
			url: '/webCheck',
			data: data,
			success: function(reply) {
				//html = html.substring(0, html.length - 6);
				/*html = html + 	'<div class = "inner-content" id = "websiteOne">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" type = "checkbox" checked = "checked">';
				html = html + '</input>';
				html = html + '</div>';*/
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
			}
		//$.post('/webAdd', data);
		});
	}
}
function errorCreate() {
	$("#errMessage").addClass("show");
	console.log("error");
}
function initialize() {


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
				html = html + 	'<div class = "inner-content" id = "website' + reply.websiteNumber +'">'+ reply.websites[reply['websites'].length-1]['title'];
				html = html + '<input class = "checkBox" id = "checkBox' + reply.websiteNumber +'" type = "checkbox" checked onclick = "webCheck(' + reply.websiteNumber +')">';
				html = html + '</input>';
				html = html + '</div>';
				$('#blockDropdown').html(html); 
				$('#webDropDown').html('<button onclick = "showBlocked()"' +
					'class = "dropbtn">' + reply['websiteNumber']+' Blocked' +
					'<img src = "../images/dropDown.png" style = "width:20;height:20px;">' +
					'</img>');
				
		//$.post('/webAdd', data);
	}
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
		if(taskName && dueDate && hours && minutes
		&&parseInt(hours) && parseInt(minutes)) {
		data = {"title": taskName, "id": "id"+number, "number":number, 
		"dropDown": "detailDropdown"+number, "due_date":dueDate, "hours":hours, "minutes":minutes, "notes":notes}
		$.post('/taskEdit', data);
		document.location.href = '/runPage';
	    }
        else {
        	setTimeout( errorCreate, 50);
        }
	});

	$("#delete").click(function() {
		var number = document.getElementById("number").innerHTML;
		data = {'number': number}
		$.post('/taskDelete', data)
	});

}


