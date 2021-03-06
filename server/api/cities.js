const express = require('express');
const Cities = require('../models/cities')

const router = express.Router();

router.get('/', function (req, res) {
    Cities.retrieveAll( (err, cities) => {
        if (err)
            return res.json(err);
        return res.json(cities);
    });
});

router.post('/', function (req, res) {
    let city = req.body.city;

    Cities.insert(city,  (err, result) => {
        if (err)
            return res.json(err);
        return res.json(result);
    });
})

module.exports = router;