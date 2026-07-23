
import express from 'express';
import studentRoute from './routes/studentRoute.js'
import conncetDB from './config/db.js'
import dotenv from 'dotenv'
const app=express(); //instance of express()
app.use(express.json()) // parses data coming from frontend
dotenv.config();
conncetDB();

const PORT=process.env.PORT;

app.use('/student',studentRoute)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
