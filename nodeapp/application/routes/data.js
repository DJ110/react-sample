/**
 * Created by dj110 on 6/11/17.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/data.json', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    var data = {};
    data.data = [];
    data.data.push({"index": 1, "name": "Taro"});
    data.data.push({"index": 2, "name": "Jiro"});
    res.json(data);
});

module.exports = router;