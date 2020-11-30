const express = require('express')
const path = require('path')

const app = express()
const port = 3000


app.get('', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/about', (req, res) => {
    if (!req.query.age){
        res.send({
            error: 'you need to query age'
        })
    }
    else{
        console.log(req.query.age)
        res.send([{name: 'Ann', age: 22}, {name: 'Ben', age: 36}].find((person) => {
            return person.age === req.query.age * 1
        }))
    }
})

app.get('/about/*', (req, res) => {
    res.send('here is nothing')
})

app.get('*', (req, res) => {
        res.send('404')
    })    

app.listen(port, () => {
  console.log('listening at http://localhost:3000')
})