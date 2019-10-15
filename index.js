const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

//mongodb://tygrys123:tygrys123@ds235078.mlab.com:35078/tigerserv_nas
app = express()
require('dotenv/config')


//conect to DB use mongoose
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log('Connected To Database!')
})

app.get('/',(req,res)=> res.send('server start') )

app.listen(PORT, ()=> console.log(`Server start on port: ${PORT}`))