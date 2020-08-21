const express=require('express');
const cors=require('cors');

const app=express();
const mongoose = require("mongoose");
require('dotenv/config');
const bodyParser=require('body-parser');
//allowing inter domain services
app.use(cors());
app.use(bodyParser.json())

//importing the post routes

const postsRoutes=require('./routes/posts');

app.use("/posts", postsRoutes);

// //creating a middleware-a function that runs when we hit a route i.e a requst or a response
// app.use('/post', ()=>{console.log('this is a middleware running');})

//routes
app.get('/', (req, res)=>{
    res.send("we are on the localhost home");
});



//connect to the moongodbdb//
//mongoose.connect('mongodb://localhost/manyposts' || process.env.DB_CONNECTION
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connection was successful");
  }
);

mongoose.connection.on("connected",()=>{
  console.log('you are cnn haki ya nanai');
})
//cheking to see if you are really connected to the database;
mongoose.connection.once("open", () => {
  console.log("and yes you are connected sio mchezo!!!");
}).on("error", (error)=>{
  console.log(`connection error: ${error}`);
})
app.listen(4000);

// link from the moongose connection database server below



//mongodb+srv://solo:<password>@cluster0.hbzex.mongodb.net/<dbname>?retryWrites=true&w=majority