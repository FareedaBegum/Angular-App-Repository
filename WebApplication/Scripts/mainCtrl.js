angular
.module('mainApp').controller('mainCtrl', [
    '$scope',
    '$rootScope',
    '$filter', function ($scope, $rootScope, $filter) {
        $scope.Mobiles = [
            { "itemName": "Samsung" },
            { "itemName": "Nokia" },
            { "itemName": "Lenovo" },
            { "itemName": "Oppo" },
            { "itemName": "Moto" },
            { "itemName": "Apple" },
            { "itemName": "Sony" }
        ];
        $scope.Camera = [
            { "itemName": "Nikon" },
            { "itemName": "Canon" },
            { "itemName": "Sony" },
            { "itemName": "Olympus" }
        ];
        $scope.Laptops = [
          { "itemName": "Lenovo" },
          { "itemName": "Sony" },
          { "itemName": "HP" },
          { "itemName": "Acer" }
        ];
        $scope.Routing = [
        { "itemName": "Nested View", "link": "nestedview" },
        { "itemName": "Multiple View", "link": "multipleview" },
        { "itemName": "SPA Ex View", "link": "singlepageapp" }
        ];

        $('.nav-ul').on('click', 'li', function () {
            $('.nav-ul li.activee').removeClass('activee');
            $(this).addClass('activee');
        });
    }]);