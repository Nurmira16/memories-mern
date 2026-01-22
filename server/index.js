import express from 'express'
import mongoose from 'mongoose'
import postRoutes from './routes/posts.js'
import cors from 'cors'

const app=express();

app.use(express.json())
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors())
app.use('/posts', postRoutes)




const CONNECTION_URL='mongodb+srv://nurmiratest:nurmira123@cluster0.h9zmwqy.mongodb.net/'


const PORT=process.env.PORT||3000

mongoose.connect(CONNECTION_URL).then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`))).catch((e)=>console.log(e.message))

