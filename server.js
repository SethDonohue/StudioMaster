const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/build`) );

const port = process.env.port || 8080

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html') );
})

app.listen(port, function(){
    console.log("listening on ", port)
})