const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/users');

router.get('/', usercontroller.getAll);
router.get('/:id', usercontroller.getSingle);

module.exports = router;