const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmVpbWx5YW5nIiwiYSI6ImNraTJuZjJrNTBoejAycWxsYWFxaDR3ZDYifQ.mjtjGlxFIeFsp7lpV2UpZQ'

    request({url: url, json: true}, (error, {body}) => {
        //这里发生了甚么事? 我一看, 原来destructure了原有为response的参数, 很快啊, {body}对response.body重新定义了一步, 你以为es6他是乱改的, 他可不是乱改的, 我一问, 原来这样可以少打几个字. 年轻人, 耍小聪明, 不讲码德, 耗子为汁.
        if (error){
            callback('service connect failed', undefined)
        }
        else if (body.features.length === 0){
            callback('cannot find location', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geocode