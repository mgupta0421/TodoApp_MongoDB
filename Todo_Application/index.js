const express = require("express");
const app = express();


app.get('/', function(req,res){
    res.send('welcome page loaded');
})

app.listen(4000, function(){
    console.log('server is running on port 4000');
})