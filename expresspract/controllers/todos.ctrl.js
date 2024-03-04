const getDatabase = require('../db.js')
async function getAllTodos(req, res){
    const db = getDatabase();
    const todos =db.collection('todos');

    const alltodos = await todos.find().toArray();
    res.json(alltodos);
}
module.exports = getAllTodos;