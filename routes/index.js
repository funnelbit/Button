
/*
 * GET home page.
 */

exports.index = function(req, res){

    console.log(req.query);

  res.render('index', {
      title: 'Express', 
      button: {
        theme: 'default',
        title: req.query.title,
        image: req.query.image,
        sound: req.query.sound
      }
  });
};
