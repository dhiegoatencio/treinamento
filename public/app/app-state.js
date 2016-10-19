angular.module("app").config(function ($stateProvider) {
    var listaTelefonicaState = {
      name: 'listaTelefonica',
      url: '/lista-telefonica',
      template: '<lista-telefonica></lista-telefonica>'
    };

    $stateProvider.state(listaTelefonicaState);
});
