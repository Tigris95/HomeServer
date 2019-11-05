const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/todo.model')
const PORT = process.env.PORT || 5000

app = express()
require('dotenv/config')

//connect to DB use mongoose
mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true},() => {
    console.log('Connected To Database!')
})
app.use(express.json())
//basics routes
app.get('/',cors(),async (req,res)=>{
    try{
        const todo = await Todo.find()
        res.json(todo)
    }catch(err){
        res.json({message: err})
    }
})

app.post('/addtodo',async (req, res)=> {
    const todo = new Todo({
        _id: req.body.todo._id,
        title: req.body.todo.title,
        date: Date.now(),
        done: req.body.todo.done,
        text: req.body.todo.text
        
    })
//save todo DB
   try{ const savedtodo = await todo.save()
    res.json(savedtodo)
    }catch(err){
        res.json({message: err})

    }
})
app.patch('/updatetododone/:id',cors(), async (req,res)=>{
   try{
      await Todo.updateOne(
        {_id: req.params.id},
        {$set: { done: req.body.done}}
    )  
   }catch(err){
       res.json(err)
   }  
})
//delete todos
app.delete('/deletetodo/:id',cors(), async (req, res)=>{
    try{
    const removedTodo = await Todo.remove({_id: req.params.id})
    res.json(removedTodo)
    }catch(err){
        res.json({message: err})
    }
})
app.listen(PORT, ()=> console.log(`Server start on port: ${PORT}`))