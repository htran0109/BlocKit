
/*For dropdown, when clicked, show websites blocked*/

var data = require('../static/json_data/data.json');

exports.runPage = function(req, res){
	console.log(data);
	res.render('runTask', data);
};



