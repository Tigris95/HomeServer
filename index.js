const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todo.model')
const PORT = process.env.PORT || 3000

//mongodb://tygrys123:tygrys123@ds235078.mlab.com:35078/tigerserv_nas
app = express()
require('dotenv/config')

//conect to DB use mongoose
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log('Connected To Database!')
})
app.use(express.json())

app.get('/',async(req,res)=>{
    try{
        const todo = await Todo.find() 
        res.json(todo)
    }catch(err){
        res.json({message: err})
    }
} )

app.post('/addtodo',async (req, res)=> {
    const todo = new Todo({
        title: req.body.title,
        text: req.body.text
    })

   try{ const savedtodo = await todo.save()
    res.json(savedtodo)
    }catch(err){
        res.json({message: err})
    }
})

app.listen(PORT, ()=> console.log(`Server start on port: ${PORT}`))