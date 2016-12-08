angular.module('starter.controllers')
    .controller('LoginController', ['$scope', '$state', function ($scope, $state) {
        
        $scope.userEmail = localStorage.getItem('user');

        $scope.register = function (user) {
            //firebase register
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function () {
                localStorage.setItem('user', user.email);
                $state.go('menu.messages');
            }, function (error) {
                console.log('register error:' + error.message);
                alert('Occoured and error during your request');
            });
        };

        $scope.login = function (user) {
            //firebase login
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function () {
                localStorage.setItem('user', user.email);
                $state.go('menu.messages');
            }, function (error) {
                console.log('login error:' + error.message);
                alert('Email or password is incorrect');
            });
        };

        $scope.logout = function () {
            //firebase logout
            firebase.auth().signOut().then(function () {
                localStorage.removeItem('user');
                $state.go('login');
            }, function (error) {
                console.log('logout error:' + error.message);
                alert('Occoured and error during your request');
            });
        };
    }]);