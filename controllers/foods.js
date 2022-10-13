const Food = require('../models/Food')

module.exports = {
    index, 
    create,
}

async function index(req, res){
    Food.find({}, function(err, foods) {
        if (err) {
            res.status(500).json(err)
        }
        res.json(foods).status(200)
    })
}

async function create(req, res) {
    try{ 
        Food.create(req, body, function(err, foods) {
        res.status(200).json('ok')
    }) 
    } catch(err) {
        res.status(500).json(err)
    }
}