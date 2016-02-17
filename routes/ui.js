/* GET users listing. */
exports.dialog = function(req, res){
  res.render('dialog', {title: '对话框'});
};


exports.segment = function(req, res){
	res.render('segment', { title: '分段选择'})	
};
