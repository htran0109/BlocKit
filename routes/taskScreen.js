var data = require('../static/json_data/data.json');

exports.view = function(req, res){
	//grab the taskNumber to be shown
	console.log(req.params.taskNumber);
	var taskNumber = parseInt(req.params.taskNumber,10);
	console.log(taskNumber);
	console.log(data);
	console.log(data.tasks[taskNumber]);
	var newData = data.tasks[taskNumber];
	newData.websites = data.websites;
	res.render('taskScreen', newData);
	
	
};
