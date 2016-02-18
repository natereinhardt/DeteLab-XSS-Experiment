(function (angular) {
    'use strict';
//===============================Frontend Dependencies================================================
    var app = angular.module('XssSim', [
        'ngRoute',
        'ngResource',
        'XssSim.dashboardCtrl'
    ]);
//==================================Route Provider==============================================================
// Definitions of what happens when urls are hit. This defines the controller and the html page it needs to render
    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
        $routeProvider.when(
            '/', {
                templateUrl: 'dashboard/dashboard.html',
                pageName: 'Dashboard'
            });
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
    }]);
}(window.angular));
(function (angular) {
    'use strict';
    var ngModule = angular.module('XssSim.dashboardCtrl', []);
    ngModule.controller('dashboardCtrl', function ($http) {

        //"Global Variables"
        var vm = this;
        vm.success = false;
        vm.loading = false;
        vm.comments = [];

        //"Global Functions"
        vm.addComment = addComment;
        vm.listComments = listComments;
        vm.init = init;

        //Anything that needs to be instantiated on page load goes in the init
        function init() {
            vm.listComments();
        }
        init();

        // Add a repository
        function addComment(comment) {
            vm.loading = true;
            return $http.post("/api/comment/" + encodeURIComponent(comment)).then(function (){
                vm.success = true;
                vm.addedComment = vm.comment;
                vm.comment = '';
                vm.loading = false;
                listComments();
            });
        }
        //Lists all repos that have been checked out
        function listComments() {
            return $http.get('/api/comment').then( function (response){
                vm.comments = response.data;

            });
        }
    });
}(window.angular));
