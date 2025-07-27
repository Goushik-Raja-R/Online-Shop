const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const admindata = require('./Routes/admin');
const shoproutes = require('./Routes/shop');

const app = express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admindata.routes);
app.use(shoproutes);

app.use((req,res,next)=>{
    // res.sendFile(path.join(__dirname,'./','views','404.html')) --> direct to the 404.html file
    res.status(404).render('404',{PageTitle:'Page Not Found'}); //direct to the 404.pug file
});

const port = 3000;

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
})