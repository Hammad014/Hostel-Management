import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from 'mongoose';
import express from "express";


const app=express();

const url="mongodb+srv://hammad145:hammad123@cluster0.mixqqhx.mongodb.net/?retryWrites=true&w=majority";
//function to create connection with databasenpm 
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>console.log("database Connected"));

app.listen(5000); //server is listing on 5000 port for the data to recieve

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
