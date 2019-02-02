
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todosSchema = new Schema({
    userName: String,
    title: String,
    todo: String,
    colhint: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

//Model name DAO object is Todos.
var Todos = mongoose.model('Todos',todosSchema);

module.exports = Todos;
