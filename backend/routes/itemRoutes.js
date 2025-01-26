const express = require('express');
const router = express.Router();
const itemController = require('../Controllers/itemController');

router.get('/', itemController.getItems);
router.post('/items/', itemController.createItem);
router.put('/items/:id', itemController.updateItem);
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;