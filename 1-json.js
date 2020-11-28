const fs = require('fs')
const { title } = require('process')

const dataBuffer = fs.readFileSync('1-json.json') //in binary
const dataJSON = dataBuffer.toString() //in string
const data = JSON.parse(dataJSON) //in object

data.title = "this is changed title"
const newData = JSON.stringify(data)
fs.writeFileSync('1-json.json', newData) 

console.log(dataBuffer)
console.log(dataJSON)
console.log(data)
console.log(data.quiz.sport.q1)

console.log(data.title)