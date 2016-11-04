var data = require('../static/json_data/data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('createTask', data);
};
