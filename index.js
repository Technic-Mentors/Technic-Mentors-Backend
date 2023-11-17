const connectToMongo = require('./db')
connectToMongo()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.use('/uploads', express.static('uploads'));
app.use('/api/auth', require('./routes/auth'))

app.listen(8001 ,()=>{
    console.log('App listing at http://localhost:8001')
    })
    
