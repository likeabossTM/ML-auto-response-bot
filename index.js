'Use Strict'
const http = require('http');
const Servidor = require('./servidor');
const categorias = require('./categoriasAPI/categoriasML.js');
const colors = require('colors');
const clientes = require('./usuariosAPI/clientesML.js');
const estadisticas = require('./Fancy/serverStats.js');

var keys = {

'client_id': '',
'client_secret': 'voAT4ciHIA6jrJ6U63ElUisE34NU2KGn',

} 


//implementando un servidor sencillo con el modulo nativo http en un modulo externo llamado servidor.js
var server = new Servidor();
server.serverUp;





//funcion constructor para obtener los codigos de las categorias de ml
//estas seran anadidas al modulo categoriasML.js en la carpeta categoriasAPI
categorias.categoriasML;
// clientes.clientesML;
console.log(estadisticas.estadisticasF());


//
// console.log(meliObject.get);
//
// console.log(meliObject.toString());
