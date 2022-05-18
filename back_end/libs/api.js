/**
 * @desc 连接数据库的函数
 * @author zq
 * @date 某年某月某日
 * @param {String} url：数据库的地址
 */
var url = 'mongodb://localhost:27017/parctice'
function connectDB(url) {
    var MongoClient = require('mongodb').MongoClient
    let client = MongoClient.connect(url, {useNewUrlParser: true})
    console.log('connect success...')
    return client
}


/**
 * @desc 向数据库中插入数据的方法
 * @author zq
 * @date 某年某月某日
 * @param {String} collectionName：具体要操作的集合
 * @param {Object} json：要插入到数据库中的数据
 */
exports.insert = async function(collectionName, json, res) {
    // 连接数据库
    let client = await connectDB(url)
    let db = client.db('parctice')
    db.collection(collectionName).insertOne(json, (err, result) => {
        if(err) throw err
        console.log('insertOne success...')
        // 关闭数据库
        client.close().then(() => {
            console.log('SHUTDOWM')
        })
        res.send({ status: 200, msg: 'Descript Adding new data succeeded' })
    })
}

/**
 * @desc 删除数据库中数据的方法
 * @author zq
 * @date 某年某月某日
 * @param {String} collectionName：具体要操作的集合
 * @param {Object} json：要删除的数据条件
 */
exports.remove = async function(collectionName, json, res) {
    let client = await connectDB(url)
    let db = client.db('parctice')
    db.collection(collectionName).remove(json, (err, result) => {
        if(err) throw err
        client.close().then(() => {
            console.log('SHUTDOWN')
        })
        res.send({ status: 200, msg: `Delete ${json.name}\'s information has succeeded` })
    })
}

/**
 * @desc 修改数据库中数据的方法
 * @author zq
 * @date 某年某月某日
 * @param {String} collectionName：具体要操作的集合
 * @param {Object} json1：查询条件
 * @param {Object} json2：要修改的内容
 */
exports.update = async function(collectionName, json1, json2, res) {
    let client = await connectDB(url)
    let db = client.db('parctice')
    db.collection(collectionName).updateOne(json1, json2, err => {
        if(err) throw err
        client.close().then(() => {
            console.log('SHUTDOWN')
        })
        res.send({ status: 200, msg: 'Data Modification succeeded' })
    })
}

/**
 * @desc 查询数据库中数据的方法
 * @author Cherry
 * @date 某年某月某日
 * @param {String} collectionName：具体要操作的集合
 * @param {Object} json：查询条件
 */
exports.search = async function(collectionName, json, res) {
    let client = await connectDB(url)
    let db = client.db('parctice')
    let total = await db.collection(collectionName).find().count()
    db.collection(collectionName).find(json).toArray((err, result) => {
        if(err) throw err
        client.close().then(() => {
            console.log('SHUTDOWN')
        })
        res.send({ status: 200, data: result, total: total })
    })
}