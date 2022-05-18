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
            name: '王小虎'+i,
            age: '18',
            gender: '1',
            address: '上海市普陀区金沙江路 1518 弄',
            student_id: '123486323',
            class: '1',
            state: '在读',
            concat: '123-2132-3080'
        }
        arr.push(obj)
    }
    db.collection('stuList').insertMany(arr, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: '数据新增成功' })
    })
});

// router.get('/find', function(req, res) {
//     let data = db.collection('stuList').find()
//     // console.log(data)
//     data.toArray((err, result) => {
//         // console.log(result)
//         res.send({ status: 200, data: result })
//     })
// })

// router.get('/find', async function(req, res) {
//     let skip = Number(req.query.currentPage - 1) * Number(req.query.pageSize)
//     let limit = Number(req.query.currentPage) * Number(req.query.pageSize)
    
//     let total = await db.collection('stuList').find().count()
//     let data = db.collection('stuList').find().skip(skip).limit(limit)
//     data.toArray((err, result) => {
//         res.send({ status: 200, data: result, total: total})
//     })
// })

router.get('/search', async function(req, res){
    let skip = Number(req.query.currentPage - 1) * Number(req.query.pageSize)
    let limit = Number(req.query.currentPage) * Number(req.query.pageSize)
    let searchValue = req.query.name.toString()
    console.log(searchValue)
    var str=".*"+searchValue+".*$"
    var reg = new RegExp(str)

    let data
    let total
    if(searchValue != ''){
        total = await db.collection('stuList').find({ 'name': {$regex:reg,$options: 'i'}}).count()
        if(total< skip)
            skip = 0
        data = db.collection('stuList').find({ 'name': {$regex:reg,$options: 'i'}}).skip(skip).limit(limit)
    }else{
        total = await db.collection('stuList').find().count()
        data = db.collection('stuList').find().skip(skip).limit(limit)
    }
    data.toArray((err, result) => {
        res.send({status:200, data: result, total: total})
    })
})
// router.post('/search', function(req, res) {
//     let data = db.collection('stuList').find()
//     // console.log(data)
//     console.log(req.body);
//     if(req.body.name != ''){
//         let datas = []
//         data.toArray((err, result) => {
//             result.forEach(item => {
//                 item.name.indexOf(req.body.name) > -1 ? datas.push(item) : ''
//             });
//             console.log(datas);
//             res.send({ status: 200, data: datas })
//         })
//     }
//     else{
//         res.send({status:400, data: []})
//     }
// })

router.post('/insert', function (req, res) {
    db.collection('stuList').insertOne(req.body, (err, result) => {
        if(err) throw err
        res.send({ status: 200, msg: '信息添加成功', data: req.body})
    })
})

router.put('/update', function(req, res){
    req.body.classN = req.body.class
    console.log(req.body);
    let {name, age, gender, address, student_id, classN, state, concat} = req.body
    db.collection('stuList').update({student_id: student_id},{
            $inc: { stock: 5 },
            $set: {
                name: name,
                age: age,
                gender: gender, 
                address: address,
                class: classN, 
                state: state,
                cocat: concat 
            }
        }, (err, result) => {
            if(err) throw err
            res.send({ status: 200, msg: '修改添加成功', data: req.body})
    })
})

router.delete('/delete', function(req, res){
    if(req.body._id != ''){
        db.collection('stuList').remove({
            student_id: req.body.student_id
        }, function(err, data){
            if(err) throw err
            res.send({status: 200, msg: 'delete success'})
            console.log(data);
        })
    }else{
        res.send({status: 400, msg: 'delete error'})
    }
})

module.exports = router;