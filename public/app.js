angular.module('bot', ['ngResource', 'bot.services', 'bot.controllers','ngRoute','ng-fusioncharts']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tag-list', {templateUrl: 'views/tag-list.html', controller: 'TagsListCtrl'});
        $routeProvider.when('/tag-detail/:id', {templateUrl: 'views/tag-detail.html', controller: 'TagDetailCtrl'});
        $routeProvider.when('/tag-creation', {templateUrl: 'views/tag-creation.html', controller: 'TagCreationCtrl'});
        $routeProvider.when('/quiz-list', {templateUrl: 'views/quiz-list.html', controller: 'QuizzesListCtrl'});
        $routeProvider.when('/quiz-view/:id', {templateUrl: 'views/quiz-view.html', controller: 'QuizzesViewCtrl'});
        $routeProvider.when('/quiz-edit/:id', {templateUrl: 'views/quiz-edit.html', controller: 'QuizzesEditCtrl'});
        $routeProvider.when('/quiz-stats/', {templateUrl: 'views/quiz-stats.html', controller: 'QuizzesStatsCtrl'});
        $routeProvider.when('/quiz-creation', {templateUrl: 'views/quiz-creation.html', controller: 'QuizCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
    }]);