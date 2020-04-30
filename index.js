const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log('hola en la consola');
    // res.send('hola mami linda');

    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/contacto', function (req, res) {
    console.log('hola en contacto');
    res.send('pagina de contacto');
});

app.get('/sobre-nosotros', function (req, res) {
    res.send('Texto bien makia');
});

app.listen(3000, function () {
    console.log('servidor iniciado en puerto 3000');
});