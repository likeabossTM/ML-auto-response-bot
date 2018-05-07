const meli = require('mercadolibre'); 
const appID = 7278418378031233;
const appSECRET = 'voAT4ciHIA6jrJ6U63ElUisE34NU2KGn';
const gaborama = 74847421;


//funcion constructor detras de las peticiones a la api
var objetoMercadolibre = new meli.Meli(appID, appSECRET);

objetoMercadolibre.get('users', {
    ids: [gaborama]
}, function (err, res) {
    // console.log(err, res);
});

exports.clientesML;
