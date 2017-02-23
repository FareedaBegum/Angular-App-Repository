myApp.factory('TestResource', ['$resource', function ($resource) {
    return $resource('test.json', {}, {});
}]);