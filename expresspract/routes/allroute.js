const express = require('express');
const todosctrl = require('../controllers/todos.ctrl')


// const router = express.Router();

// router.get('/user', (res)=>{   // ye sagar ke age user lag jaega
//     // res.send("Hello sagar");

// });
// router.post('/user', ()=>{});
// module.exports = router;

const todoroute = express.Router();

todoroute.get('/',todosctrl.getAllTodo);

module.exports = todoroute;