

var fs = require('fs');
var pdf = require('html-pdf');

const contenido = ``

var html = fs.readFileSync('./test/pagina.html', 'utf8');

pdf.create(html).toStream(function(err, stream){
  stream.pipe(fs.createWriteStream('paginaP.pdf'));
});


/* pdf.create(contenido).toFile('./test/pagina.pdf', function (err, res) {
  if (err) return console.log(err);
  console.log(res); 
});
 */
