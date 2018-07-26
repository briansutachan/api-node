var express = require('express');
var app = express();
var _ = require('lodash');
const port = 3050;
const host = '173.109.109.66';

app.use(express.static('client'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

var lions = [
    {
    id : 1,
    name : 'Simba',
    pride : 'The cool cats',
    age : 3,
    gender : 'male'
},
{
    id : 2,
    name : 'Mufasa',
    pride : 'The cool cats',
    age : 4,
    gender : 'male' 
}];
var id = 0;

app.get('/lions', (req, res) => {
    res.json(lions);
});

app.get('/lions/:id', (req, res) => {
    var lion = lions.find(lion => {
        return lion.id == req.params.id;
    });

    res.json(lion || {});
});

app.post('/lions', (req, res) => {
    var lion = req.body;
    id++;
    lion.id = id + '';

    lions.push(lion);

    res.json(lion)
});

app.listen(port, host, function () {
    console.log('Listening on http://localhost:', port);
})