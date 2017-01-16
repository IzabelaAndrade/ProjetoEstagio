angular.module('starter')
.controller('ListagemController', function($scope) {

    $scope.listaVisita = [{"nome" : "Morador1" , "textarea" : "bla bla bla bla bla"}];
});


angular.module('starter')
.controller('RevisitaDetalheController', function($stateParams, $scope) {

	$scope.revisitaEscolhida = angular.fromJson($stateParams.visitas);

});	