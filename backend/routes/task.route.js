const express = require('express');
const {createTask,getTasks,updateTaskById,deleteTaskById } = require('../controller/task.controller');

const route = express.Router();

route.post('/create', createTask);
route.get('/get/:id?', getTasks);
route.put('/update/:id', updateTaskById);
route.delete('/delete/:id', deleteTaskById);

module.exports = route;
