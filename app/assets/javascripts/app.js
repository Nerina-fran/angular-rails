// angular.module('flapperNews', ['ui.router', 'templates'])
// .controller('MainCtrl', [
// '$scope',
// function($scope){
//   $scope.test = 'Hello world!';
// }]);

angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      resolve: postPromis:['posts', function(posts){
        return posts.getAll();
      }]
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);




