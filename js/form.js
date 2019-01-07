var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', function ($scope) {
    $scope.userInfo = {
        email: "dfadsf@df.com",
        password: "123123123",
        autoLogin: true
    };
    $scope.getFormData = function () {
        console.log($scope.userInfo)
    };
    $scope.setFormData = function () {
        $scope.userInfo = {
            email: "shaoli@qq.com",
            password: "shaoli",
            autoLogin: false
        }
    };
    $scope.resetForm = function () {
        $scope.userInfo = {
            email: "dfadsf@df.com",
            password: "123123123",
            autoLogin: true
        }
    };
}]);