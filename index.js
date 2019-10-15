const express = require('express')
const PORT = process.env.PORT || 3000
app = express()

app.get('/',(req,res)=> res.send('server start') )

app.listen(PORT, ()=> console.log(`Server start on port: ${PORT}`))