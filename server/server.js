var express = require('express');
var app = express();
var port = 3000;
var host = '173.109.109.66';

var jsonData = { count: 12, message: 'hey' };

app.get('/', (requestAnimationFrame, res) => {
    //res sendFile takes on absolute path to a file and sets the mime type based on the file extension
    res.sendFile(dir__dirname + '/index.html', err => {
        if (err) {
            res.status(500).send(err);
        }
    })
})

app.listen(port, host, function() {
console.log('Listening on http://localhost', port)
});