import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import data from './data.js'
import userRouter from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to db")
}).catch((e) => {
    console.log("error: ", e.message)
})


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.options('*', cors())



app.use(cors())

app.get("/api/users", (req, res) => {
    res.send(data.users)
})


app.use('/api/users', userRouter)

app.use((e, req, res, next) => {
    res.status(500).send({ message: e.message })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
})