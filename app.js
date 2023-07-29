require('dotenv').config();
const express = require('express')
const hbs = require('hbs');
const app = express()
const port = process.env.PORT;


//todo Handlebar
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estatico
app.use( express.static('public'));

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Abelardo Hernandez',
    titulo: 'Curso de Node.js'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Abelardo Hernandez',
    titulo: 'Curso de Node.js'
  })
})

// app.get('/generic', (req, res) => {
//  res.sendFile( __dirname + '/public/generic.html')
//  })

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Abelardo Hernandez',
    titulo: 'Curso de Node.js'
  })
})

// app.get('/elements', (req, res) => {
//  res.sendFile( __dirname + '/public/elements.html')
//  })

app.get('/*', (req, res) => {
  res.render('404', {
    nombre: 'Abelardo Hernandez',
    titulo: 'Curso de Node.js'
  })
})

// app.get('*', (req, res) => {
//   res.sendFile( __dirname + '/public/404.html')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

