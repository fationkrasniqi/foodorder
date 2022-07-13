const express = require('express');
const router = express.Router();
const User = require('../model/user');
const usersCotroller = require('../controllers/users-controllers');

router.get('/', usersCotroller.getAllUsers);
router.post('/register', usersCotroller.addUser);
router.get('/:id', usersCotroller.getById);
router.put('/:id', usersCotroller.updateUser);
router.delete('/:id', usersCotroller.deleteUser);
router.post("/login", usersCotroller.login);

module.exports = router;
