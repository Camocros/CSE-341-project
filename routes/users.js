const express = require('express');
const router = express.Router();

const usercontroller = require('../controllers/users');

router.get('/', usercontroller.getAll);
router.get('/:id', usercontroller.getSingle);
router.post('/', usercontroller.createUser);
router.put('/:id', usercontroller.updateUser);
router.delete('/:id', usercontroller.deleteUser);

module.exports = router;