const http = require('http')
let url = 'http://api.weatherstack.com/current?access_key=c9a4b9a7121f0ffd6d56594010d2510a&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        console.log(chunk)
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', () => {
    console.log('An error', error)
})

request.end()