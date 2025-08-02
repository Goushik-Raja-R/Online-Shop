const path = require('path')
const express = require('express');
const rootdir = require('../util/path');
const { title } = require('process');

const router = express.Router();

const products = [];


// add-product is have GET method
router.get('/add-product',(req,res,next)=>{
    //  res.send(`<form action="/admin/add-product" method="POST">
    //     <input type ="text" name ="title">
    //     <button type="submit">add product</button>
    //     </form>`)

    // res.sendFile(path.join(rootdir,'views','add-product.html'))
    
    res.render('add-product',
        {PageTitle:'Add product',
            path:'/admin/add-product',
            productCSS:true,
            activeAddProduct:true,
            activeShop:false
    });
});


// this add-product is have POST method
router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.products = products;