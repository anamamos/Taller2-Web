//importar modulos
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

//importarr productos
const products = require('./products'); 

//instanciar servidor de express
const app = express();

//motor de render para handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//configurar ruta incial
app.use(express.static('public'));


//main
app.get('/', function (req, res) {
    var context = {
        list: products,
    }

    res.render('list', context);
});

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});