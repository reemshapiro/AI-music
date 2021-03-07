
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, '.', 'client', 'build')));
console.log(path.join(__dirname, '.', 'client', 'build'))

app.get("/test",(req,res)=>{
    res.send({ok:true})
})
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
