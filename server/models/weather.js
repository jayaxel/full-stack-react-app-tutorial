const request = require('request-promise')

const API_KEY = '68570b9bf4b27ec429ce40ff2126312b'

class Weather {
    static retrieveByCity (city, callback) {
        request({
            uri: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
            json: true
        }).then(function (res) {
            callback(res);
        }).catch(function (err) {
            console.log(err);
            callback({ error: 'Could not reach OpenWeatherMap API.' });
        })
    }
}

module.exports = Weather;