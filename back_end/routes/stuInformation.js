var express = require('express');
var router = express.Router();
var mdb = require('../libs/api');

router.post('/insert', (req, res) => {
    mdb.insert('information', req.body, res)
});

router.get('/search', (req, res) => {
    mdb.insert('information', req.body, res)
});


router.delete('/delete', (req, res) => {
    db.collection('list').remove(req.query, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: `Delete ${req.query.name}\'s information has succeed` })
    })
});

router.put('/', (req, res) => {
    const { name, gender, age, birthDate, idNumber, father, mother, homeAddress, inDate, concat } = req.body
    mdb.update('information', { idNumber: req.body.idNumber }, {
        $set: {
            name,
            gender,
            age,
            birthDate,
            idNumber,
            father,
            mother,
            homeAddress,
            inDate,
            concat
        }
    }, res)
});