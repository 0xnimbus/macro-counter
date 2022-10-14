const express = require('express');
const router = express.Router();
const foodCtrl = require('../../controllers/api/foods');


// GET all posts
router.get('/', foodCtrl.index)

// POST new post
router.post('/', foodCtrl.create)

// UPDATE post
router.get('/update/:id', foodCtrl.update)

//POST 
router.get('/del/:id', foodCtrl.del)

module.exports = router;