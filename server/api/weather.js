
var express = require('express');
var Weather = require('../models/weather');

var router = express.Router();

router.get('/:city', (req, res) => {
    let city = req.params.city;

    Weather.retrieveByCity(city, (err, weather) => {
        if (err)
            return res.json(err);
        return res.json(weather);
    });
});

module.exports = router;