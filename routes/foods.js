const express = require('express')
const router = express.Router()
const foodCtrl = require('../controllers/foods')

// GET all posts 
router.get('/', foodCtrl.index)

//POST new post 
router.post('/', foodCtrl.create)

module.exports = router 