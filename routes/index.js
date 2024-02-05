var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',messages: messages});
});

router.get('/new', function (req,res,next) {
  res.render('form');
})

router.post('/new', function (req,res,next) {
  const body = req.body;
  const messageText = body.content;
  const messageUser = body.username;
  messages.push({text: messageText, user: messageUser, added: new Date()});
  res.redirect('/');
})

module.exports = router;
