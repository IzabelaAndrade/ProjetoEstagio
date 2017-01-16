angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('listagem');

$stateProvider

.state('listagem',{
      url : '/listagem',
      templateUrl : 'templates/listagem.html',
      controller: 'ListagemController'
})

.state('revisitadetalhe',{
	url : '/revisitadetalhe/:visitas',
	templateUrl : 'templates/revisitadetalhe.html',
	controller : 'RevisitaDetalheController'
})



})
