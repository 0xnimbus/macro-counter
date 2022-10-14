var mongoose_delete = require('mongoose-delete');
const Food = require('../../models/Food');


module.exports = {
    index,
    create,
    update,
    del
}

async function index(req, res) {
    Food.find({}, function(err, foods) {
        if (err) {
          res.status(500).json(err)
        }
        res.json(foods).status(200)
        console.log('FOOD FIND HIT')
      })
}

async function create(req, res) {
    Food.create(req.body, function(err, foods) {
        res.status(200).json('ok')
        console.log('CREATING FOOD')
        console.log(req.body)
      })
}

async function update(req, res) {
    await Food.findByIdAndUpdate(req.params.id, {foods: req.body.foods, calories: req.body.calories})
    console.log("UPDATING")
    console.log("REQ.BODY", req.body)
}

async function del(req, res) {
    console.log('REQ PARAMS ID', req.params.id)
    console.log("Deleting")
    Food.findByIdAndDelete(req.params.id, function(err, delId) {
        console.log(delId, ' Got deleted')
    })
}