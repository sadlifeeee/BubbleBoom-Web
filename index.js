const dotenv = require('dotenv');
const fs = require('fs');
const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine' , 'hbs');

dotenv.config(); 
hbs.registerPartials(__dirname + '/views/partials')


app.use(express.static(__dirname + '/public'));


port = process.env.PORT;
hostname = process.env.HOSTNAME;

app.get('/' , function(req, res) {
    res.render('home.hbs');
});


app.listen(port , hostname , function(){
    console.log('Server Running at:');
    console.log('http://' + hostname + ':' + port);
});