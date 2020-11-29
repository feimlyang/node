const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmVpbWx5YW5nIiwiYSI6ImNraTJuZjJrNTBoejAycWxsYWFxaDR3ZDYifQ.mjtjGlxFIeFsp7lpV2UpZQ'

    request({url: url, json: true}, (error, response) => {
        if (error){
            callback('service connect failed', undefined)
        }
        else if (response.body.features.length === 0){
            callback('cannot find location', undefined)
        }
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}
module.exports = geocode