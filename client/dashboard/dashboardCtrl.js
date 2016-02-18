(function (angular) {
    'use strict';
    var ngModule = angular.module('XssSim.dashboardCtrl', []);
    ngModule.controller('dashboardCtrl', function ($http, $sce) {

        //"Global Variables"
        var vm = this;
        vm.success = false;
        vm.loading = false;
        vm.comments = [];

        vm.addComment = addComment;
        vm.listComments = listComments;
        vm.init = init;


        function init() {
            vm.listComments();
        }
        init();


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

        function listComments() {
            return $http.get('/api/comment/list').then( function (response){
                vm.comments = response.data;
                var commentsLength = vm.comments.length;
                vm.firstComment = vm.comments[(commentsLength-1)].message;
                //USE HIS URL FOR A STORED ATTACK THAT COULD LURE UNEXPECTED USERS
                //<img  src='http://malwarefixes.com/wp-content/uploads/2014/12/systemfoundvirus.png' style='width:1000px;height:1000px;'/>";
                vm.topComment = "<h1>" + vm.firstComment + "</h1>";
                vm.trustedMessage =  $sce.trustAsHtml(vm.firstComment);
            });
        }
    });
}(window.angular));
