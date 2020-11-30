const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=9ca0f169c4c82d5e3da660dd7dd8a3cb&query=40,-75'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.on('error', (error) => {
    console.log('An error', error)
} )

request.end()