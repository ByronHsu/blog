const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blog');
}

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


var userDataSchema = new Schema({
  title: String,  
  content: String,  
  time: String,
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.json(doc);
      });
});

router.get('/get-data/:article_id', function(req, res, next) {
  const id = req.params.article_id
  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    res.json(doc);
  });
});

router.post('/insert', function(req, res, next) {
  var item = req.body
  var data = new UserData(item);
  data.save();
  //res.redirect('/'); 
 
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;