angular.module('bot', ['ngResource', 'bot.services', 'bot.controllers','ngRoute']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tag-list', {templateUrl: 'views/tag-list.html', controller: 'TagsListCtrl'});
        $routeProvider.when('/tag-detail/:id', {templateUrl: 'views/tag-detail.html', controller: 'TagDetailCtrl'});
        $routeProvider.when('/tag-creation', {templateUrl: 'views/tag-creation.html', controller: 'TagCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/tag-list'});
    }]);