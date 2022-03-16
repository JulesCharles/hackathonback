require("dotenv").config()
const express = require('express')
const cors = require("cors")
const morgan = require('morgan')
const mysql = require("./config/db")
const routes = require("./routes/index")

const app = express()

mysql.connect((err)=>{
    if (err){
        console.error("error connectiong: " + err.stack)
    } else {
        console.log("connected to database with threadId : " + mysql.threadId)
    }
})




app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/select', routes.select)

app.get('/', (req, res)=>{
    res.status(200).json()
})

app.listen(process.env.PORT, console.log(`https://localhost:${process.env.PORT}`))