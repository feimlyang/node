const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-app'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error){
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('user').insertMany([{
    //     name: 'Karen',
    //     age: 27
    // }, {
    //     name: 'Allen',
    //     age: 58
    // }], (error, result) => {
    //     if (error){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('user').find({age: 27}).toArray((error, users) => {
    //     if (error){
    //         return console.log('unable to fetch')
    //     }
    //     console.log(users)
    // })

    //search by id, can't use string directly
    // db.collection('user').findOne({_id: new ObjectID("5fc5b041b79ff7c96bf29218")}, (error, user) => {
    //     if (error){
    //         return console.log('unable to fetch')
    //     }
    //     console.log('分割线' + '\n' + user.age)
    // })


    //Promise:
    const updatePromise = db.collection('user').updateOne({
        _id: new ObjectID("5fc5af25c0e0d3c922251112")
    }, {
        $set: {
            name: 'Tom'
        },
        $inc: {
            age: 1
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    db.collection('user').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


})

