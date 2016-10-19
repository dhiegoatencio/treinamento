(function () {
  //
  // var inject = ['$scope'];
  // function ListaTelefonicaCtrl($scope) {
  //   $scope.app = "Lista Telefonica";
  //   //ctrl nomeado
  // }
  // ListaTelefonicaCtrl.$inject = inject;
  //
  // angular.module("listaTelefonica", []).controller("listaTelefonicaCtrl", ListaTelefonicaCtrl);

  function ListaTelefonicaCtrl() {
    var ctrl = this;

    ctrl.app = "Property de teste";
  }

  angular.module('listaTelefonica', []).component('listaTelefonica', {
    controller: ListaTelefonicaCtrl,
    templateUrl: 'app/lista-telefonica/lista-telefonica.html'
  })

}());
