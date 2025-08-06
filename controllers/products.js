const ProductModel = require('../models/product')

exports.getAddProducts = (req,res,next)=>{
    res.render('add-product',
        {PageTitle:'Add product',
            path:'/admin/add-product',
            productCSS:true,
            activeAddProduct:true,
            activeShop:false
    });
};

exports.postAddProduct = (req,res,next)=>{
    const product = new ProductModel(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    const products = ProductModel.FetchAll();
    res.render('shop',{
        prods:products,
        PageTitle:'Shop',
        path:'/',
        hasproducts:products.length>0,
        activeShop:true,
        activeAddProduct:false,
        productCSS:true,
    });
};

exports.errorPage = ((req,res,next)=>{
    // res.sendFile(path.join(__dirname,'./','views','404.html')) --> direct to the 404.html file
    res.status(404).render('404',{PageTitle:'Page Not Found',path:req.url}); //direct to the 404.pug file
})