const express = require('express')
const mongoose = require('mongoose')
const Todo = require('./models/todo.model')
const PORT = process.env.PORT || 3000

app = express()
require('dotenv/config')

//connect to DB use mongoose
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log('Connected To Database!')
})
app.use(express.json())
//basics routes
app.get('/',async(req,res)=>{
    try{
        const todo = await Todo.find() 
        res.json(todo)
    }catch(err){
        res.json({message: err})
    }
})

app.post('/addtodo',async (req, res)=> {
    const todo = new Todo({
        title: req.body.title,
        text: req.body.text
    })
//save todo DB
   try{ const savedtodo = await todo.save()
    res.json(savedtodo)
    }catch(err){
        res.json({message: err})
    }
})
//delete todos
app.delete('/deletetodo:id', async (req, res)=>{
    try{
    const removedTodo = await Todo.remove({_id: req.params.id})
    }catch(err){
        res.json({message: err})
    }
})

app.listen(PORT, ()=> console.log(`Server start on port: ${PORT}`))