
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};
exports.page = function(req, res){
  res.render('page');
};
exports.menubar = function(req, res){
  res.render('menubar');
};
exports.login = function(req, res){
  res.render('login');
};
exports.head = function(req, res){
  res.render('head');
};
