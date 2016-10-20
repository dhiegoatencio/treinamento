angular.module("app").config(function ($stateProvider) {

    $stateProvider.state('listaTelefonica', {
      template: '<lista-telefonica></lista-telefonica>',
      url: '/lista-telefonica'
    });
});
