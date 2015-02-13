 // Get all of our friend data
var data = require('../linguisticsprofessorsdata.json');

exports.view = function(req, res){
	console.log(data);
	res.render('linguisticsprofessors', data);
};