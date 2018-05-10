var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var usersController = require('../../controllers/UsersController');
var usersRequest = require('../../requests/UserRequest');
/* GET ALL USER */
router.get('/', usersController.index);

/* GET SINGLEUSER BY ID */
router.get('/:id', usersController.show);

/* SAVE USER */
router.post('/', usersRequest.validation, usersController.store);

/* UPDATE USER */
router.put('/:id', usersRequest.validation, usersController.update);

/* DELETE USER */
router.delete('/:id', usersController.destroy);

module.exports = router;