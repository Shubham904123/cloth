const express = require('express');

const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const mongoDb = require('mongodb')
const mongoDbClient = require('mongodb').MongoClient;

app.use(cors());
app.use(bodyParser.json())

const connectionString = 'mongodb+srv://admin:admin@cluster0.fe8izhn.mongodb.net/?retryWrites=true&w=majority'

var foodproducts;
var user;
var cart;
var placeorder;
var admin;
var feedback;
mongoDbClient.connect(connectionString, (err, succ) => {
    if (err) throw err;
    console.log("db connected")
    foodproducts = succ.db("clothes").collection('foodproducts');
    user = succ.db("clothes").collection('user');
    cart = succ.db("clothes").collection('cart');
    placeorder = succ.db("clothes").collection('placeorder');
    admin = succ.db("clothes").collection('admin');
    feedback = succ.db("clothes").collection('feedback');
})

app.post("/addpro", (req, res) => {
    // console.log(req.body)
    foodproducts.insertOne(req.body).then((succ) => {
        // console.log(succ)
        res.send("ADDED")
    })
})

app.post('/getfood', (req, res) => {
    console.log(req.body)
    foodproducts.find({
        ftype: req.body.ftype,
        men:req.body.srch2
    }).toArray().then((succ) => {
        res.send(succ)
        console.log(succ)
    })
})
app.post('/getallfood', (req, res) => {
    var q;
    if (req.body.type1) {
        q = foodproducts.find({ ftype: req.body.type1 })
    } else {
        q = foodproducts.find()
    }
    q.toArray().then((succ) => {
        res.send(succ)
        console.log(succ)
    })
})

var id1;
app.post('/getonepro', (req, res) => {
    // console.log(req.body)
    id1 = new mongoDb.ObjectId(req.body.id)
    foodproducts.findOne({
        _id: id1
    }).then((succ) => {
        res.send(succ)
        // console.log(succ)
    })
})

app.post("/editpro", (req, res) => {
    foodproducts.updateOne({
        _id: id1
    }, {
        $set: {
            fname: req.body.fname,
            ftype: req.body.ftype,
            fveg: req.body.fveg,
            fimg: req.body.fimg,
            fprc: req.body.fprc,
        }
    }).then((succ) => {
        res.send('updated')
    })
})
app.post("/delpro", (req, res) => {
    // console.log(req.body)
    var idd = new mongoDb.ObjectId(req.body.id)
    // console.log(idd)
    foodproducts.deleteOne({
        _id: idd
    }).then((succ) => {
        // console.log(succ)
        res.send("Deleted")
    })
})

app.post('/userlogin', (req, res) => {
    // console.log(req.body)
    user.insertOne(req.body).then((succ) => {
        res.send("login successful")
    })
})

app.post("/getusr", (req, res) => {
    user.findOne({ Email: req.body.Email }).then((succ) => {
        res.send(succ)
    })
})
app.post("/getuser2", (req, res) => {
    user.findOne({ Email: req.body.Email }, { Password: req.body.Email }).then((succ) => {
        res.send(succ)
        // console.log(succ)
    })
})

app.post("/mycart", (req, res) => {
    cart.insertOne(req.body).then((succ) => {
        res.send("success")
    })
})

app.post("/getcart", (req, res) => {
    console.log(req.body.em)
    cart.find({ User: req.body.em }).toArray().then((succ) => {
        res.send(succ)
    })
})

app.post('/incqty', (req, res) => {
    var idd = new mongoDb.ObjectId(req.body._id)
    console.log(idd)
    cart.updateOne({
        _id: idd
    }, {
        $inc: {
            Fqty: 1
        }
    }).then((succ) => {
        res.send(succ)
    })
})
app.post('/decqty', (req, res) => {
    var idd = new mongoDb.ObjectId(req.body._id)
    console.log(idd)
    cart.updateOne({
        _id: idd
    }, {
        $inc: {
            Fqty: -1
        }
    }).then((succ) => {
        res.send(succ)
    })
})

app.post("/placeorder1", (req, res) => {
    placeorder.insertOne(req.body).then((succ) => {
        res.send("order has been placed")
    })
})

app.post('/delcart', (req, res) => {
    cart.drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });
})

app.post("/getadmin",(req,res)=>{
    admin.findOne({
        Email:req.body.Email
    }).then((succ)=>{
        res.send(succ)
    })
})

app.post("/getallusers",(req,res)=>{
    user.find().toArray().then((succ)=>{
        res.send(succ)
    })
})

app.post("/sndfback",(req,res)=>{
    feedback.insertOne(req.body).then((succ)=>{
        res.send("Feedback sent")
    })
})

app.post("/delpro1",(req,res)=>{
    console.log(req.body)
    var idd = new mongoDb.ObjectId(req.body.id)
    cart.deleteOne({
        _id :idd
    }).then((succ)=>{
        res.send("deleted")
    })
})

app.listen('1100', (req, res) => {
    console.log("server started")
})
