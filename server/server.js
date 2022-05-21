const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(5000, ()=> {
    console.log('🌽 I\'m listening....');

});
