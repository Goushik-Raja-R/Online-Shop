exports.get404Page = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'./','views','404.html')) --> direct to the 404.html file
    res.status(404).render('404',{PageTitle:'Page Not Found',path:req.url}); //direct to the 404.pug file
}

