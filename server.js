var express = require('express')
var app = express()
var repo=require('./repo')
var bodyParser=require('body-parser');
var cors=require('cors');
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get('/employee', function (req, res) {
    repo.findemployee((err,data)=>{
        res.json(data);
    });
})
 
app.post('/employees', function (req, res) {
    var color=req.body
    console.log(color)
    repo.insertemployee(color,(result)=>{
    
            res.status(201).json({message:"Inserted the document"})
        })
})

app.delete('/employees/:email', function (req, res) {
var email=req.params.email
repo.deleteemployee(email,(result)=>{
res.status(202).json({message:"Deleted the document",email:email})
})
})
 

app.put('/editemployees', function (req, res) {
    var body=req.body;
    console.log(req.body)
    console.log(body.email)
    repo.updateemployee(body,(result)=>{
    res.status(202).json({message:"updated the document",})
    })
    })
app.listen(8001,()=>console.log("Listening to port 8001..."))//