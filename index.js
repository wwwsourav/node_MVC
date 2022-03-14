const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
// const home = require('./route/routee');
// const about =require('./route/routee');
// const contact =require('./route/routee');
// const post =require('./route/routee');
const HomeRoute = require('./route/HomeRoute'); 
const AdminController = require('./route/admin/AdminRoute');
app.set('view engine','ejs')
app.set('views','views')
const port = process.env.PORT || 4000
app.use(express.static(path.join(__dirname,'public')));
// app.use(home);
// app.use(about);
// app.use(contact);
// app.use(post);
app.use(HomeRoute);
app.use(AdminController);
app.listen(port,() =>{
    console.log(`server running at http://localhost:${port}`);
})
