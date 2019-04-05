const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
console.log(path.join(__dirname,'../public'));
app.use(cors({origin: 'https://findaplace.herokuapp.com'}));
app.use(express.static(path.join(__dirname,'../public')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/getvalues', function(req, res){
    console.log((req.query));
    axios.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+req.query.address+"&key=AIzaSyDkngvP8JqiYNJyZLgzLrftXylkv9ZDIrQ")
        .then(function(resp){
            console.log(resp);
            res.send(resp.data);
        })
        .catch(function(err){

        })
        .then(function () {

        });
});


app.listen(port, function(){
    console.log('Listening on port '+port);
});


