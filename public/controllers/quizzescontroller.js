app.controller('QuizzesListCtrl', ['$scope', 'QuizzesFactory', 'QuizFactory', '$location',
    function ($scope, QuizzesFactory, QuizFactory, $location) {
        
        $scope.viewQuiz = function (quizId) {
            $location.path('/quiz-view/' + quizId);
        };
        
         $scope.deleteQuiz = function (quizId) {
            QuizFactory.delete({ id: quizId });
            $scope.quizzes = QuizzesFactory.query();
        };
        

        $scope.quizzes = QuizzesFactory.query();
  

        

  }]);

app.controller('QuizzesStatsCtrl', ['$scope', 'QuizzesFactory','QuizzesStatsFactory', 'QuizFactory', '$location',
    function ($scope, QuizzesFactory, QuizzesStatsFactory, QuizFactory, $location) {
        
        //$scope.quizzes = QuizzesStatsFactory.query();
        $scope.dataSource = {
    "chart": {
      "caption": "Top Performing Quizzes",
      "captionFontSize": "30",
        "labelfontsize" : "18",
        "valuefontsize" : "16"
      // more chart properties - explained later
    },
    "data": [{
        "label": "Engineering",
        "value": "33"
      }, 
        {
            "label":"Science",
            "value" : "38"
        }
    ]
  };
            
    }]);    

app.controller('QuizzesViewCtrl', ['$scope', '$routeParams', 'QuizFactory', '$location',
    function ($scope, $routeParams, QuizFactory, $location) {

          $scope.quiz = QuizFactory.show({id: $routeParams.id});
        
        
        $scope.editQuiz = function (quizId) {
            $location.path('/quiz-edit/' + quizId);
            
        };
        
        
       

    }]);

app.controller('QuizzesEditCtrl', ['$scope', '$routeParams', 'QuizFactory', 'TagsFactory', '$location',
    function ($scope, $routeParams, QuizFactory, TagsFactory, $location) {


        
            $scope.updateQuiz = function () {
            console.log($scope.quiz);
            QuizFactory.update($scope.quiz);
            quizId = $scope.quiz._id
            $location.path('/quiz-list/');
        };

        $scope.tags = TagsFactory.query();
        $scope.quiz = QuizFactory.show({id: $routeParams.id});
       

    }]);

app.controller('QuizCreationCtrl', ['$scope', 'TagsFactory','QuizzesFactory', '$location',
    function ($scope, TagsFactory, QuizzesFactory, $location) {
        
        $scope.tags = TagsFactory.query();

        $scope.createNewQuiz = function () {
            QuizzesFactory.create($scope.quiz);
            $location.path('/quiz-list');
        }
    }]);

