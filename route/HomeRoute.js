const express = require('express');
const Route = express.Router();
// const about = require('../controller/about');
// const contact = require('../controller/contact');
// const home = require('../controller/home');
// const post = require('../controller/post');
const HomeController = require('../controller/HomeController');

Route.get('/',HomeController.home);
Route.get('/about',HomeController.about);
Route.get('/contact',HomeController.contact);
Route.get('/post', HomeController.post);


module.exports= Route;