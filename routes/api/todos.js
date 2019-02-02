const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const TodosModel = require('../../models/TodoModel');

//@routes POST /api/todos/getTodos/:uname for a username
//@desc Get todos with a specific username
//@access Public
//@Testing through Postman http://localhost:5000/api/todos/getTodos/:uname

router.get('/getTodos/:uname',(req,res)=>{
  TodosModel.find({userName: req.params.uname},function(err,todos){
    if(err) throw err;
    res.send(todos);
  });
});


//@routes GET api/getTodo/:id
//@desc Get todo with a specific id
//@access Public
//@Testing through Postman http://localhost:3000/api/todos/getTodo/:id

router.get('/getTodo/:id',(req,res)=>{
  TodosModel.findById({ _id: req.params.id},function(err,todo){
    if(err) throw err;
    res.send(todo);
  });
});


//@routes POSt /api/addTodo/
//@desc Add todo or update an existing todo.
//@access Public
//@Testing through Postman http://localhost:3000/api/todos/addTodo

router.post('/addTodo',(req,res)=>{
  console.log(req.body);
  if(req.body.id){
    TodosModel.findOneAndUpdate(req.body.id,{
      title: req.body.title,
      todo: req.body.todo,
      colhint: req.body.colhint,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    },function(err,todo){
      if(err) throw error;
      res.send('Success-Todo Updated');
    })
  }else{
    var newTodo = new TodosModel({
      userName: "John",
      title: req.body.title,
      todo: req.body.todo,
      colhint: req.body.colhint,
      isDone: req.body.isDone,
      hasAttachment: req.body.hasAttachment
    });
    newTodo.save(function(err,todo){
      if(err) throw err;
      res.send(todo);
    })
  }
});

//@routes POSt /api/removeTodo/
//@desc Remove a todo
//@access Public
//@Testing through Postman http://localhost:3000/api/todos/removeTodo/:id
router.delete('/removeTodo/:id',(req,res) => {
  TodosModel.findByIdAndRemove({_id:req.params.id},
  function (err) {
    if(err) throw err;
    res.send('Success-Todo Deleted');
  });
});

module.exports = router;
