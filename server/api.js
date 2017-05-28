const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var userDataSchema = new Schema({
  content: String,
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
  console.log(req.params.article_id);
  const id = req.params.article_id
  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    res.json(doc);
  });
});

router.post('/insert', function(req, res, next) {
  console.log(req.body);
  var item = {
    content: req.body.content
  };

  var data = new UserData(item);
  data.save();
  //res.redirect('/');

});

router.post('/update', function(req, res, next) {
  var id = req.body.id;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function(req, res, next) {
  var id = req.body.id;
  UserData.findByIdAndRemove(id).exec();
  res.redirect('/');
});

module.exports = router;