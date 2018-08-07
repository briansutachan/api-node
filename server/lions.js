var lionRouter = require("express").Router();

var lions = [
    {
        id: 1,
        name: 'Simba',
        pride: 'The cool cats',
        age: 3,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Mufasa',
        pride: 'The cool csats',
        age: 4,
        gender: 'male'
    }
];
var id = 2;

var updateId = function (req, res, next) {
    if (!req.body.id) {
        id++;
        req.body.id = id + '';
    }

    next();
};

lionRouter.param('id', (req, res, next, id) => {
    var lion = lions.find(lion => {
        return lion.id == req.params.id;
    });

    if (lion) {
        req.lion = lion;
        next();
    } else {
        res.send()
    }
});

lionRouter.get('/', (req, res) => { //GET lions
    res.json(lions);
});

lionRouter.get('/:id', (req, res) => { //  GET lion.id
    
    var lion = req.lion;
    res.json(lion || {});
});

lionRouter.post('/', updateId, (req, res) => { //POST lion.id
    var lion = req.body;

    lions.push(lion);

    res.json(lion)
});

function findLionIndex (id) {
    //findIndex stuff
    return lionIndex;
}

lionRouter.put('/:id', (req, res) => { // PUT/REPLACE lion.id
    var update = req.body;
    if (update.id) {
        delete update.id;
    }

    var lion = lions.findIndex(lion => lion.id == req.params.id);
    if (!lions[lion]) {
        res.send();
    } else {
        var updatedLion = Object.assign(lions[lion], update);
        //_.assign(lions[lion], update);
        res.json(updatedLion)
    }
    console.log(lion);
});

lionRouter.delete("/:id", (req, res) => { // DELETE lion.id
    var lion = lions.findIndex(lion => lion.id == req.params.id);
    if (!lions[lion]) {
        res.send();
    } else {
        var deletedLion = lions[lion];
        lions.splice(lion, 1);
        res, json(deletedLion);
    }
});
module.exports = lionRouter;