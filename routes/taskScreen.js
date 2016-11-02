
/*For dropdown, when clicked, show websites blocked*/

var data = require('../static/json_data/completed.json');

exports.view = function(req, res){
	console.log(data);
	res.render('history', data);
};



