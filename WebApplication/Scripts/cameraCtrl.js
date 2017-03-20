angular.module('mainApp').controller('cameraCtrl', [
    '$scope',
    '$rootScope',
    '$http',
    'TestService', function ($scope, $rootScope, $http, TestService) {
        $scope.myInterval = 30000;
        $scope.slides = [
          { image: 'Content/Images/ketobru_howdoubru_bg.png' },
          { image: 'Content/Images/image (2).jpg' },
          { image: 'Content/Images/powerstrips-europe.png' }
        ];
        $scope.data = {}
        $scope.data.firstname = "fareeda";
        $scope.data.lastname = "begum";
        $scope.data.gender = "female";
        var a = JSON.stringify($scope.data);
        $scope.postdata = function () {
            console.log(a);            
           
    }
}]);




//(function () {
//    'use strict'
//    angular.module('mainApp').controller('cameraCtrl', cameraFunction);
//    cameraCtrl.$inject = ['TestService', '$scope', '$rootScope', '$http'];
//    function cameraFunction(TestService, $scope, $rootScope, $http) {
//        $scope.myInterval = 30000;
//                $scope.slides = [
//                  { image: 'Content/Images/ketobru_howdoubru_bg.png' },
//                  { image: 'Content/Images/image (1).png' },
//                  { image: 'Content/Images/image (2).jpg' },
//                  { image: 'Content/Images/powerstrips-europe.png' }
//                ];
//                $scope.data = {}
//                $scope.data.firstname = "fareeda";
//                $scope.data.lastname = "begum";
//                $scope.data.gender = "female";
//                var a = JSON.stringify($scope.data);
//                $scope.postdata = function () {
//                    console.log(a);
//                    //TestService
//                    //    .postDetails(a)
//                    //    .then(console.log("Done"));
//                }
//    }
//})();







//TestService.save($scope.data);
//TestService.save($scope.data, function () {
//    console.log("Done");
//    //saves serializes $scope.entry object as JSON and sends as 
//});
// $http.post('test.json', JSON.stringify($scope.data))
//    .then(function (data) {
//    console.log("Done");
//});