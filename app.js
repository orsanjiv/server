const { config } = require("dotenv");
const express = require("express");
const dotenv = require('dotenv');
const app = express();
const mongoose = require("mongoose");

dotenv.config({path:'./config.env'})
require('./db/conn')


app.get('/',(req,res)=>{
    res.send("This is home page");
})

app.get('/aboutme',(req,res)=>{
    res.send("This is about me page");
})

app.get('/gallary',(req,res)=>{
    res.send("This is gallary page");
})

app.get('/signin',(req,res)=>{
    res.send("This is signin and signup page");
})

app.listen(3000,()=>{
    console.log("Server 3000 started...");
})