services.factory('QuizzesFactory', function ($resource) {
    return $resource('http://localhost:3000/api/quizzes', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('QuizzesStatsFactory', function ($resource) {
    return $resource('http://localhost:3000/api/quizzes/stats', {}, {
        query: { method: 'GET', isArray: true }
    })
});

services.factory('QuizFactory', function ($resource) {
    return $resource('http://localhost:3000/api/quizzes/:id', {id:'@_id'}, {
        show: { method: 'GET' },
        update: { method: 'PUT'},
        delete: { method: 'DELETE' }
    })
});