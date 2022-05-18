var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.collection('admin').insertOne({username: 'admin', password:'admin'})
  res.send({username: 'admin', password:'admin'})
});

router.post('/', function(req, res, next) {
  if(req.body.name != '' && req.body.password != ''){
    let data = db.collection('admin').find()
    data.toArray((error, result) => {
      console.log(result);
      let pass = result.filter(item => {
        return item.username === req.body.name && item.password === req.body.password
      });
      if(pass.length > 0) 
        res.send({ status: 200, msg: 'Login success', username: req.body.name }) 
      else
        res.send({ status: 400, msg: 'username or password is error' })
    })
  }
  else{
    res.send({status: 400, msg: 'no root number'})
  }
});

module.exports = router;
