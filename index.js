// var express = require('express');
var express = require('express')

const dotenv = require('dotenv')
 
const port = process.env.PORT || 5567

const path = require("path")
var bodyParser = require('body-parser')
const generalRoutes =  require('./router/generalRoutes')

const userRoutes = require('./router/userRoutes')

const adminRoutes = require('./router/adminRoutes')
dotenv.config()
const app = express();
app.use(bodyParser.urlencoded({ extended: false}))




app.use('/', generalRoutes);

app.use('/account', userRoutes);

app.use('/admin', adminRoutes);




app.use(express.static('public'));

app.use(express.static('pages'));









app.listen(port, console.log("Server Started at port" + port))