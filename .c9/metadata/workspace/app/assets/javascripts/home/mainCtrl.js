{"filter":false,"title":"mainCtrl.js","tooltip":"/app/assets/javascripts/home/mainCtrl.js","undoManager":{"mark":64,"position":64,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["angular.module('flapperNews')"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":29},"end":{"row":1,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":1,"column":0},"end":{"row":28,"column":3},"action":"insert","lines":[".controller('MainCtrl', [","'$scope',","'posts',","function($scope, posts){","  ","  $scope.posts = [","      posts.posts","    ];","  $scope.addPost = function(){","      if(!$scope.title || $scope.title === '') { return; }","      $scope.posts.push({","        title: $scope.title,","        link: $scope.link,","        upvotes: 0,","        comments: [","            {author: 'Joe', body: 'Cool post!', upvotes: 0},","            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}","          ]","      });","      $scope.title = '';","      $scope.link = '';","   };","  ","  $scope.incrementUpvotes = function(post) {","      post.upvotes += 1;","    };","  ","}])"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":20,"column":6},"action":"remove","lines":["$scope.posts.push({","        title: $scope.title,","        link: $scope.link,","        upvotes: 0,","        comments: [","            {author: 'Joe', body: 'Cool post!', upvotes: 0},","            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}","          ]","      });","      "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":12,"column":0},"action":"insert","lines":["",""]},{"start":{"row":12,"column":0},"end":{"row":12,"column":6},"action":"insert","lines":["      "]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":12},"end":{"row":11,"column":18},"action":"insert","lines":["create"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":18},"end":{"row":11,"column":20},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":19},"end":{"row":11,"column":21},"action":"insert","lines":["{}"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":20},"end":{"row":13,"column":6},"action":"insert","lines":["","        ","      "]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["t"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":26},"action":"insert","lines":["title"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":[","]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":27},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":8},"action":"insert","lines":["        "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":[":"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["$"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":18},"end":{"row":13,"column":19},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["l"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["n"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["k"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":8},"end":{"row":14,"column":9},"action":"insert","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":6},"end":{"row":20,"column":24},"action":"remove","lines":["post.upvotes += 1;"]},{"start":{"row":20,"column":6},"end":{"row":20,"column":7},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":7},"end":{"row":20,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["."]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":12},"end":{"row":20,"column":14},"action":"remove","lines":["up"]},{"start":{"row":20,"column":12},"end":{"row":20,"column":18},"action":"insert","lines":["upvote"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":18},"end":{"row":20,"column":20},"action":"insert","lines":["()"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":[";"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":21,"column":6},"end":{"row":21,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1429215225226,"hash":"47c7ccac6c4878f29b7ceec8e239a2e68f45eb2c"}