const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, "client")));
 
const listener = app.listen(function(){
    console.log('http://localhost:' + listener.address().port);
});