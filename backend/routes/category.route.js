const express = require('express');
const {createCategory,getCategories,updateCategoryById,deleteCategoryById,} = require('../controller/category.controller');

const route = express.Router();

route.post('/create', createCategory);
route.get('/get/:id?', getCategories);
route.put('/update/:id', updateCategoryById);
route.delete('/delete/:id', deleteCategoryById);

module.exports = route;
