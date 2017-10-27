var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.listen(port, function () {

    console.log('thx for listening on port:', port);
    
});
