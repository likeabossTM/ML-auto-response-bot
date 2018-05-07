const meli = require('mercadolibre');
const bodyParser = require('body-parser');
const appID = 7278418378031233;
const appSECRET = 'voAT4ciHIA6jrJ6U63ElUisE34NU2KGn';
const gaborama = 74847421;
const fs = require('fs');
const formatosArchivos = { 'pdf': '.pdf', 'txt': '.txt', 'json': '.json' };
const nombreArchivo = '../categorias.json';
const pathArchivo = '/home/gabriel/Documentos/practicas/mercadolibre-api/categoriasAPI/';
var path = require('path');
var root = path.dirname(require.main.filename);





//dandole nombre acendente a los archivos que contienen las categorias



// el Constructor: esta compuesto de lo siguiente
//var meliObject = new meli.Meli(client_id, client_secret, [access_token], [refresh_token]);
var objetoMercadolibre = new meli.Meli( );

objetoMercadolibre.get('sites/MLV/categories', function (err, res) {

    fs.writeFile(`./categoriasAPI/categorias${formatosArchivos.txt} `,  JSON.stringify(res), function (err) {
        if (err) { throw err; }
            console.log('todo '.blue +  ' salio '.red + ' bien '.green +  ' las categorias '.white +
                        ' se guardaron en '.red + ` categorias${formatosArchivos.json}`.blue);
             var obtenerCategorias = new Object();
              obtenerCategorias.ok =  JSON.stringify(res);



    });

});

  fs.readFile(root+nombreArchivo, function (err, data) {
       if (err) console.log(err);
                console.log(data);

});


exports.categoriasML;
