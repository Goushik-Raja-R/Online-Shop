const path = require('path')
const express = require('express');
const productsController = require('../controllers/products');
// const { title } = require('process');

const router = express.Router();


// add-product is have GET method
router.get('/add-product',productsController.getAddProducts);


// this add-product is have POST method
router.post('/add-product',productsController.postAddProduct);

module.exports = router;