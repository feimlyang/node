const request = require('request')
const geocode = require('./geocode.js')
const forecast = require('./forecast.js')

const inputAddress = process.argv[2]
console.log(inputAddress)

if (inputAddress){
    geocode(inputAddress, (error, data) => {
        if (error){
            return console.log('Error ', error)
        }
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error){
                return console.log(error)
            }
            console.log('current temperature in ' + data.location + " is " + forecastData)
        })
    })
}
else{
    console.log('need to input a address')
}
