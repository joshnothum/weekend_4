var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

var bodyParser = require('body-parser');
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var pictures = [{ name: 'shower', description: 'Se fue el agua', count: 0 }, { name: 'manuel', description: 'A Dominican man and his accordion', count: 0 }, {name: 'new_bpf',description: 'after a couple years of harrassment, I finally got a picture with favorite band of mine', count: 0}, {name: 'bender',description: 'An old junkyard owner made this',count: 0}, {name: 'bcwb_opt',description: 'I took this yesterday',count: 0,},{name: 'jaxon_football',description: 'my nephew taking backyard routes seriously',count: 0,}];

app.get('/pictures', function (req, res) {
    console.log('we got this');
    
    res.send(pictures);
    
});


app.listen(port, function () {

    console.log('thx for listening on port:', port);
    
});
