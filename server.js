const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
// const handlebarshbs = require('express-handlebars');

const errorController = require('./controllers/error')

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');

const app = express();

// app.engine('hbs',handlebarshbs({layoutsDir:'views/layouts/',defaultLayout:'main-layout',extname:'hbs'}));
app.set('view engine','ejs');
app.set('views','views');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

const port = 3000;

app.listen(port,()=>{
    console.log(`server started at http://localhost:${port}`)
}) 