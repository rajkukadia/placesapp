const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
console.log(path.join(__dirname,'../public'));

app.use(express.static(path.join(__dirname,'../public')));

app.get('/', function(req, res){
    //res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, function(){
    console.log('Listening on port '+port);
});
