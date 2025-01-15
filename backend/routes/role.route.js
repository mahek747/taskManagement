const express = require('express');
const {createRole,getRoles,updateRoleById,deleteRoleById,} = require('../controller/role.controller');

const route = express.Router();

route.post('/create', createRole);
route.get('/get/:id?', getRoles);
route.put('/update/:id', updateRoleById);
route.delete('/delete/:id', deleteRoleById);

module.exports = route;
