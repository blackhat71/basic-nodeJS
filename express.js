const express = require('express')
const path = require('path')
const app = express()
// const router = require('./routes/myRouter')



app.use(express.static(path.join(__dirname, 'public')))

// app.use(router)

app.listen(8080 , ()=> {
    console.log("Start Server 8080")
})