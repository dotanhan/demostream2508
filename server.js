const express = require('express');

const app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>res.render('broadcaster'));

app.listen(3000,()=> console.log('server started'));
