const http = require('http');

http.createServer((req, res) => {
  //  res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  //  res.writeHead(200, {'Content-Type': 'aplication/csv'});
  //  
  // //const persona = {
  // //    id: 1,
  // //    nombre: 'Abe'

  // //}
  // //
  // //res.write(JSON.stringify( persona ) );// Json para serializar

  // res.write('id, nombre\n');
  // res.write('1, Abe\n');
  // res.write('2, Gloria\n');
  // res.write('3, Joss\n');
  // res.write('4, Blan\n');
   res.write('Hola Mundo');
    res.end();
})

.listen( 8080);

console.log('Escuchando el puerto', 8080);