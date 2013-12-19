
/*
 * GET home page.
 */

var count = 0;

exports.index = function(req, res){
  res.render('index', {
      title: 'Express', 
      button: {
        theme: 'default',
        title: req.query.title,
        image: req.query.image,
        count: count,
        sound: req.query.sound
      }
  });
};

exports.increment = function(req, res){
    count++;
    res.send({count: count});
};
