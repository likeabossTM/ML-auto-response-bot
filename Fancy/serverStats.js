const osutils = require('os-utils');//esto ayuda a obtener las estadisticas genericas del sistema en consola o bien en variables locales

//monitorizando el comportamiento del cpu por consola
//mostrara estadisticas para geeks

exports.estadisticasF = function ServerStats() {

  function plataformaF() {
   var plataforma = osutils.platform();
   console.log("Platform: " + plataforma);
  }


  //numero de nucleos
  function NNucleosF() {
   var nucleos = osutils.cpuCount();
   var Fixnucleos = nucleos.toFixed(2);
   console.log("Numeros de CPUs: " + Fixnucleos);
  }


  osutils.cpuUsage(function(v) {
    v = v.toFixed(2);
    console.log('Uso del CPU (%) : ' + v);
  });


  //carga total del sistema
  function cargaS(){
    var carga = osutils.loadavg(15);
    var Fixcarga = carga.toFixed(carga);
    console.log("Carga Total (5m): " + Fixcarga);
  }


  //memoria en MB
  function memoriaF() {
    var memoria = osutils.totalmem();
    var Fixmemoria = memoria.toFixed(2);
    console.log("Memoria Total : " + Fixmemoria + " MB");
  }


  //memoria libre en MB
  function MlibreF() {
    var Mlibre = osutils.freemem();
    var FixMlibre = Mlibre.toFixed(2);
    console.log("Memoria en uso: " + FixMlibre + " MB");
  }



  //porcentaje de memoria libre
  function PMlibreF() {
    var PMlibre = osutils.freememPercentage();
    var stringPMlibre = PMlibre.toFixed(2);
    console.log("Porcentaje de  Memoria Libre (%): " + stringPMlibre);
  }


  //tiempo de encendido del sistema (tiene fallos)
  function tiempoEncendido() {

    var Te = osutils.sysUptime();
    var stringTe = Te.toFixed(2);
    console.log("Tiempo : " + stringTe + " ms");


  }
  plataformaF();
  NNucleosF();
  cargaS();
  memoriaF();
  PMlibreF();
  MlibreF();
  tiempoEncendido();
}
