// angular.module('flapperNews', ['ui.router', 'templates'])
// .controller('MainCtrl', [
// '$scope',
// function($scope){
//   $scope.test = 'Hello world!';
// }]);

angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      resolve: {
        postPromis:['posts', function(posts){
          return posts.getAll();
        }]
      },
      controller: 'MainCtrl'
    })
    .state('posts', {
      url: '/posts/{id}',
      resolve: {
        post: ['$stateParams', 'posts', function($stateParams, posts) {
          return posts.get($stateParams.id);
        }]
      },
      templateUrl: 'posts/_posts.html',
      controller: 'PostsCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'auth/_login.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function(){
        Auth.currentUser().then(function(){
          $state.go('home');
        })
      }]
    })
    .state('register', {
      url: '/register',
      templateUrl: 'auth/_register.html',
      controller: 'AuthCtrl',
      onEnter: ['$state', 'Auth', function(){
        Auth.currentUser().then(function(){
          $state.go('home');
        })
      }]
    });

  $urlRouterProvider.otherwise('home');
}]);




