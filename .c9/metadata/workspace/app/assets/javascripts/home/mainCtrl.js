{"filter":false,"title":"mainCtrl.js","tooltip":"/app/assets/javascripts/home/mainCtrl.js","undoManager":{"mark":2,"position":2,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["angular.module('flapperNews')"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":[".controller('MainCtrl', [","'$scope',","'posts',","function($scope, posts){","  ","  $scope.posts = [","      posts.posts","    ];","  $scope.addPost = function(){","      if(!$scope.title || $scope.title === '') { return; }","      $scope.posts.push({","        title: $scope.title,","        link: $scope.link,","        upvotes: 0,","        comments: [","            {author: 'Joe', body: 'Cool post!', upvotes: 0},","            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}","          ]","      });","      $scope.title = '';","      $scope.link = '';","   };","  ","  $scope.incrementUpvotes = function(post) {","      post.upvotes += 1;","    };","  ","}])"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1428606637332,"hash":"b1583c5dc1b0a3cd8e4036cc9c9a013a40f633d9"}