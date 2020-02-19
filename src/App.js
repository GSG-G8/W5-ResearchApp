const express = require("express");
const path = require('path');
const fetch = require('node-fetch');
const bodyParser= require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..','public')));

app.post('/search',(req, res) =>{
    const {title} = req.body;
 fetch(`https://core.ac.uk:443/api-v2/search/${title}?page=1&pageSize=10&apiKey=J01TQ352xgtrFaSmeckGVKDZPNRd9YEi` )
 .then(result => result.json())
 .then(result => res.json(result))
 .catch(err=> console.log("error", err))
})

app.get('/all',(req, res) =>{
 fetch(`https://core.ac.uk:443/api-v2/search/java?page=1&pageSize=10&apiKey=J01TQ352xgtrFaSmeckGVKDZPNRd9YEi` )
 .then(result => result.json())
 .then(result => res.json(result))
 .catch(err=> console.log("error", err))
//  console.log(res.json(result)')
})




module.exports = app;
