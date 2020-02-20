const path = require('path');
const express = require("express");
const fetch = require('node-fetch');
const {client,server}=require('./controller/errors')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..','public')));

const apiId = process.env.apiId;

app.post('/search',(req, res) =>{
    const {title} = req.body;
 fetch(`https://core.ac.uk:443/api-v2/search/${title}?page=1&pageSize=10&apiKey=${apiId}` )
 .then(result => result.json())
 .then(result => res.json(result))
 .catch(err=> console.log("error", err))
})

app.get('/all',(req, res) =>{
 fetch(`https://core.ac.uk:443/api-v2/search/java?page=1&pageSize=10&apiKey=${apiId}` )
 .then(result => result.json())
 .then(result => res.json(result))
 .catch(err=> console.log("error", err))
})

app.use(client);
app.use(server);




module.exports = app;