const express = require('express');
const { getUsers, createUser, deleteUser, exportUsers } = require('../controllers/userController');
const { userValidation } = require('../validations/userValidation');
const router = express.Router();

router.get('/', getUsers);
router.post('/', userValidation, createUser);
router.delete('/:id', deleteUser);
router.post('/export/', exportUsers);

module.exports = router;
