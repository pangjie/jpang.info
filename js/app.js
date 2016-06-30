"use strict";

angular
.module('app', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "index_view/home.html"
        })
        .state('about', {
            url: "/about",
            templateUrl: "index_view/about.html"
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "index_view/contact.html"
        })
}])
.run(['$state','$rootScope',function($state, $rootScope){
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){      
        $rootScope.$state = $state;
    });
}])
;