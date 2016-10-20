(function () {

  function ListaTelefonicaCtrl() {
    var ctrl = this;
    ctrl.app = "Property de teste";
  }

  angular.module('listaTelefonica', []).component('listaTelefonica', {
    controller: ListaTelefonicaCtrl,
    templateUrl: 'app/lista-telefonica/lista-telefonica.html'
  });

}());
