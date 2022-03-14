const express = require('express');
const Route = express.Router();
const AdminController = require('../../controller/admin/AdminController');

Route.get('/admindashboard',AdminController.AdminController);


module.exports=Route