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
        templateUrl: 'Camera.html'     
    })
    .state('register', {
        url: '/register',
        templateUrl: 'Register.html'
    })
    //Nested Views
     .state('nestedview', {
         url: '/nestedviewrouting',
         templateUrl: 'Nestedview-Routing.html'
     })
     .state('nestedview.list', {
         url: '/list',
         templateUrl: 'Nested-list.html'
     })
     .state('nestedview.paragraph', {
         url: '/paragraph',
         templateUrl: 'Nested-paragraph.html'
     })
    //Multiple View
     .state('multipleview', {
        url: '/multipleviewrouting',
        views: {
            // the main template will be placed here
            '': { templateUrl: 'Multipleview-Routing.html' },
            'columnOne@multipleview': { templateUrl: 'Multipleview-One.html' },
            'columnTwo@multipleview': { templateUrl: 'Multipleview-Two.html' }
        }
     })
     //Single Page App
    .state('singlepageapp', {
        url: '/spaexample',
        views: {
            '': { templateUrl: 'spaMainPage.html' },
            //'header@singlepageapp': { templateUrl: 'headerpage.html' },
            //'footer@singlepageapp': {templateUrl: 'footerpage.html'}
        }
    })
    .state('cast', {
        parent: 'singlepageapp',
        url: '/cast',
        views: {
            '': {templateUrl:'home-cast.html'}
        }

    })
    .state('cast.info', {
        url: '/castinfo',
        views: {
            'castname': { templateUrl: 'cast-info.html' }
        }
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