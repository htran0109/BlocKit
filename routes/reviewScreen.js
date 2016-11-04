
var olddata = require('../static/json_data/oldTasks.json');
var data = require('../static/json_data/data.json');

exports.view = function(req, res){
	//grab the taskNumber to be shown
	console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(olddata);
	console.log(olddata.tasks[taskNumber]);
	var newData = olddata.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('taskReview', newData);
	
	
};