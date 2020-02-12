const express = require('express');
const routes = express.Router();

const LoginController = require('./controllers/LoginController');
const VendorController = require('./controllers/VendorController');
const VerifyToken = require('./utils/verifyToken');

routes.post('/auths', LoginController.store);

routes.get('/', VerifyToken, VendorController.index);
routes.post('/vendors', VerifyToken, VendorController.store);
routes.get('/vendors/:id', VerifyToken, VendorController.show);
routes.put('/vendors/:id', VerifyToken, VendorController.update);
routes.delete('/vendors/:id', VerifyToken, VendorController.delete);

module.exports = routes;