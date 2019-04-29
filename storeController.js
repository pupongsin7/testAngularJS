(function () {
    'use strict';

    var app = angular.module('application', []);
    app.controller('storeController', function ($scope) {
        $scope.purchase = function(item){
            if(item.quantity >0)return true;
            else return false;
        }
        $scope.clickAdd = function(item){
            item.quantity += 1;
        }
        $scope.clickRemove = function(item){
            if(item.quantity > 0)item.quantity -= 1;
            else false;
        }
        $scope.sushi = [
            {
                "name": "Maguro",
                "price": 200,
                "description": "Fat Tuna",
                "image" : "image/maguro.jpg",
                "quantity" : 0 
            },
            {
                "name": "Tamago",
                "price": 120,
                "description": "ข้าวปั้นหน้าไข่",
                "image" : "image/tamago.jpg",
                "quantity" : 0 
            },
            {
                "name": "Ebi",
                "price": 150,
                "description": "ข้าวปั้นหน้ากุ้ง",
                "image" : "image/ebi.jpg",
                "quantity" : 0 
            },
            {
                "name": "Tako",
                "price": 180,
                "description": "ข้าวปั้นหน้าปลาหมึก",
                "image" : "image/tako.jpg",
                "quantity" : 0 
            }
        
        ];
        
    });
    // app.factory('GetJsonData',function($http,$q){
    //     return {
    //         getData:function(){
    //             var deferred = $q.defer();
    //             $http({
    //                     method:'GET',
    //                     url : 'data.json'
    //                 }).then(function(data){
    //                 deferred.resolve(data);
    //             });
    //             return deferred.promise;
    //         }
    //     };
    // });

})();
