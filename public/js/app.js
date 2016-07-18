/**
 * Created by mlingolu on 7/11/16.
 */

angular.module('smart-app',['ui.router']);

angular.module('smart-app').config(config);


function config($stateProvider,$urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'templates/home/index.html'
        })
        .state('travel',{
            url:'/travel',
            templateUrl:'templates/travel/index.html'
        })
        .state('restaurants',{
            url:'/restaurants',
            templateUrl:'templates/restaurants/index.html'
        })
        .state('movies',{
            url:'/movies',
            templateUrl:'templates/movies/index.html'
        })
        .state('cars',{
            url:'/cars',
            templateUrl:'templates/cars/index.html'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}

