var myApp = angular.module('mainApp', ['ui.router', 'ui.bootstrap', 'ngResource']);

myApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise('/home');
    $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'Home.html'      
    })
    .state('camera', {
        url: '/camera',
        templateUrl: 'Camera.html',
        //controller: 'cameraCtrl',
        //controllerAs: 'cameraCtrl'
    })
    //Nested Views
     .state('camera.list', {
         url: '/list',
         templateUrl: 'Camera-list.html'
     })
     .state('camera.paragraph', {
         url: '/paragraph',
         templateUrl: 'Camera-paragraph.html'
     })
    .state('register', {
        url: '/register',
        templateUrl: 'Register.html'
    })
}]);

myApp.factory('TestService', ['$http', function ($http) {
    //  return $resource('test.json', {}, { save: { method: 'POST' } });
    var service = {};
    service.postDetails = postDetails;
    return service;
    function postDetails(request) {
        return $http({
            method: 'POST',
            url: 'test.json',
            data: request
        })
    }

}]);