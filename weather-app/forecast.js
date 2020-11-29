const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9ca0f169c4c82d5e3da660dd7dd8a3cb&query=' + longitude + ',' + latitude
    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('connection failed', undefined)
        }
        else if (response.body.error){
            callback('search failed', undefined)
        }
        else{
            callback(undefined, response.body.current.temperature)
        }
    })

}
module.exports = forecast