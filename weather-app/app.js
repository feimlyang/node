const request = require('request')
const geocode = require('./geocode.js')



geocode('ottawa', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})