const express = require('express');
const router = express.Router();

const todoModel = require('../../models/TodoModel');

//@routes GET api/setup/test
//@desc Test the api route
//@access Public
//@Testing through Postman http://localhost:5000/api/setup/test
router.get('/test',(req,res)=>{
  res.json({users : 'Inside Users'});
});


//@routes GET /api/setup/seed
//@desc Add seeding data and display the seeded data with unique id
//@access Public
//@Testing through Postman http://localhost:5000/api/setup/seed

/** Sample Results after seeding into Mongo
  [{"_id":"5c4f14ac02df9f097f43c6e7","userName":"John","todo":"Bring milk","isDone":false,"hasAttachment":false,"__v":0},
  {"_id":"5c4f14ac02df9f097f43c6e8","userName":"John","todo":"Take dog for a walk","isDone":false,"hasAttachment":false,"__v":0},
  {"_id":"5c4f14ac02df9f097f43c6e9","userName":"John","todo":"Learn NodeJS","isDone":false,"hasAttachment":false,"__v":0}]
*/
router.get('/seed',(req,res)=>{
  var seedData = [
                 {
                   userName: 'John',
                   title: 'Bring milk',
                   todo: 'Go to Sainbury for Milk',
                   colhint: '#ffa500',
                   isDone: false,
                   hasAttachment: false
                 },
                 {
                   userName: 'John',
                   title: 'Take dog for a walk',
                   todo: 'Go to Pewley Hills with Pony',
                   colhint: '#ff0000',
                   isDone: false,
                   hasAttachment: false
                 },
                 {
                   userName: 'John',
                   title: 'Learn NodeJS',
                   todo: 'Read about Idempotent API',
                   colhint: '#8c52ff',
                   isDone: false,
                   hasAttachment: false
                 }
  ];

  todoModel.create(seedData, (err,results)=>{
    if (err) return handleError(err);
    else res.send(results);
  })

});

module.exports = router;
