var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    // let data = db.collection('stuList').find()
    // // console.log(data)
    // let datas = []
    // data.toArray((err, result) => {
    //     console.log(result.length);
    // })
    // res.send({ status: 200, data: datas})
    let arr = []
    for(let i = 0; i < 85; i++) {
        let obj = {
            name: 'Name' + i,
            class: 'Web-Class01',
            toBeDue: 100,
            actual: 85,
            attendance: '85%',
            attendanceRanking: 1,
            attendanceRate: 'Excellent'
        }
        arr.push(obj)
    }
    db.collection('attendance').insertMany(arr, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: '数据新增成功' })
    })
});

router.get('/find', function(req, res) {
    let data = db.collection('attendance').find()
    // console.log(data)
    data.toArray((err, result) => {
        // console.log(result)
        res.send({ status: 200, data: result })
    })
})

router.post('/search', function(req, res) {
    let data = db.collection('attendance').find()
    if(req.body.name != ''){
        let datas = []
        data.toArray((err, result) => {
            result.forEach(item => {
                item.name.indexOf(req.body.name) > -1 ? datas.push(item) : ''
            });
            console.log(datas);
            res.send({ status: 200, data: datas })
        })
    }
    else{
        res.send({status:400, msg: '查询内容不能为空'})
    }
})

module.exports = router;