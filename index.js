import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


const app = express();
dotenv.config();
//for cross platform resource sharing
app.use(cors());


//setting up bodyParser
// app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


//post routes enable
// http://localhost:5000/posts
app.use('/posts', postRoutes);

app.get('/', (req, res)=>{
    res.send("Memories app API");
})

//mongodb setup
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message));
