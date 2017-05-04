var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Pasatiempos');

    $stateProvider

        // Pasatiempos View
        .state('Pasatiempos', {
            url: '/Pasatiempos',
            templateUrl: 'templates/MisPasatiempos.html'
        })

        // MiFuturo View
        .state('MiFuturo', {
            url: '/MiFuturo',
            templateUrl: 'templates/Futuro.html'
        });

});
