// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('webspeaksApp', ['ionic', 'ngSanitize', 'GoogleLoginService'])
//integrate pouchDB
var localDB = new PouchDB("webspeaksdb");

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//Define routes
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('news_card', {
        url: '/news_card',
        templateUrl: "templates/news_card.html",
        controller: 'NewsCardController'
    })
    .state('news_detail', {
        url: '/news_detail/:id/:category',
        templateUrl: "templates/news_detail.html",
        controller: 'DetailController'
    })
    .state('categories', {
        url: '/categories/:id',
        templateUrl: "templates/category.html",
        controller: 'CategoryController'
    })
    .state('user_profile', {
        url: '/user_profile',
        templateUrl: "templates/user_profile.html",
        controller: 'ProfileController'
    });
  $urlRouterProvider.otherwise('/');
});

// Define module constants
app.constant("config", {
    '1': {
      'Top stories': 'http://timesofindia.indiatimes.com/rssfeeds/4719161.cms', 
      'Entertainment': 'http://timesofindia.indiatimes.com/rssfeeds/1081479906.cms',
      'Finance': 'http://timesofindia.indiatimes.com/rssfeeds/1898055.cms',
      'Sports': 'http://timesofindia.indiatimes.com/rssfeeds/4719148.cms',
      'Technology': 'http://timesofindia.indiatimes.com/rssfeeds/5880659.cms',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'icon':'toi_icon.png' 
    },
    '2': {
      'Top stories': 'http://gadgets.ndtv.com/rss/mobiles/feeds',
      'Entertainment': 'http://feeds.feedburner.com/ndtvmovies-latest',
      'Finance': 'http://feeds.feedburner.com/ndtvprofit-latest',
      'Sports': 'http://feeds.feedburner.com/ndtvsports-latest',
      'Technology': 'http://feeds.feedburner.com/gadgets360-latest',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'ndtv_icon.png'
    },
    '3': {
      'Top stories': 'http://www.hindustantimes.com/rss/bollywood/rssfeed.xml', 
      'Entertainment': 'http://www.hindustantimes.com/rss/entertainment/rssfeed.xml',
      'Finance': 'http://www.hindustantimes.com/rss/business/rssfeed.xml',
      'Sports': 'http://www.hindustantimes.com/rss/sports/rssfeed.xml',
      'Technology': 'http://www.hindustantimes.com/rss/tech/rssfeed.xml',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'hindustan_times_icon.png'
    },
    '4': {
      'Top stories': 'http://rss.cnn.com/rss/edition.rss', 
      'Entertainment': 'http://rss.cnn.com/rss/edition_entertainment.rss',
      'Finance': 'http://rss.cnn.com/rss/money_news_international.rss',
      'Sports': 'http://rss.cnn.com/rss/edition_sport.rss',
      'Technology': 'http://rss.cnn.com/rss/edition_technology.rss',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'cnn_icon.png'
    },
    '5': {
      'Top stories': 'http://www.cnbc.com/id/10000110/device/rss/rss.html',
      'Entertainment': 'http://www.cnbc.com/id/10000110/device/rss/rss.html',
      'Finance': 'http://www.cnbc.com/id/10001147/device/rss/rss.html',
      'Sports': 'http://rss.cnn.com/rss/edition_sport.rss',
      'Technology': 'http://www.cnbc.com/id/19854910/device/rss/rss.html',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'cnbc_icon.jpg'
    },
    '6': {
      'Top stories': 'http://www.thehindu.com/features/cinema/?service=rss',
      'Entertainment': 'http://www.thehindu.com/features/friday-review/?service=rss',
      'Finance': 'http://www.thehindu.com/business/?service=rss',
      'Sports': 'http://www.thehindu.com/sport/?service=rss',
      'Technology': 'http://www.thehindu.com/sci-tech/?service=rss', 
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'hindu_icon.jpg'
    },
    '7': {
      'Top stories': 'http://indiatoday.intoday.in/rss/homepage-topstories.jsp',
      'Entertainment': 'http://indianexpress.com/section/entertainment/feed/',
      'Finance': 'http://indiatoday.intoday.in/rss/article.jsp?sid=34',
      'Sports': 'http://indiatoday.intoday.in/rss/article.jsp?sid=41',
      'Technology': 'http://indiatoday.intoday.in/rss/article.jsp?sid=2', 
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'india_today.png'
    },
    '8': {
      'Top stories': 'http://indianexpress.com/section/world/feed/',
      'Entertainment': 'http://www.thehindu.com/features/friday-review/?service=rss',
      'Finance': 'http://indianexpress.com/section/opinion/feed/',
      'Sports': 'http://indianexpress.com/section/sports/feed/',
      'Technology': 'http://indianexpress.com/section/technology/feed/',
      'World':'http://indianexpress.com/section/world/feed/',
      'Health':'http://indianexpress.com/section/lifestyle/feed/', 
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'india_express.png'
    },
    '9': {
      'Top stories': 'http://www.thestar.com/feeds.topstories.rss',
      'Entertainment': 'http://www.thestar.com/feeds.articles.entertainment.rss',
      'Finance': 'http://www.thestar.com/feeds.articles.business.rss',
      'Sports': 'http://www.thestar.com/feeds.articles.sports.rss',
      'Technology': 'http://www.thestar.com/feeds.articles.opinion.editorials.rss', 
      'World':'http://www.thestar.com/feeds.articles.news.world.rss',
      'Health':'htttp://www.thestar.com/feeds.articles.life.health_wellness.rss',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'star_news.jpg'
    },
    '10': {
      'Top stories': 'http://zeenews.india.com/rss/india-national-news.xml',
      'Entertainment': 'http://zeenews.india.com/rss/entertainment-news.xml',
      'Finance': 'http://zeenews.india.com/rss/business.xml',
      'Sports': 'http://zeenews.india.com/rss/sports-news.xml',
      'Technology': 'http://zeenews.india.com/rss/technology-news.xml', 
      'World':'http://zeenews.india.com/rss/world-news.xml',
      'Health':'http://zeenews.india.com/rss/health-news.xml',
      'Fashion':' http://indianexpress.com/section/lifestyle/fashion/feed/',
      'icon': 'zee_news.png'
    },
    'PAGE_SIZE': 30
});

//controller
app.controller("AppController", ['$scope','$state', 'config', 'DAO', 'FeedService', '$ionicLoading', '$ionicPopup','googleLogin','$window',
    function($scope, $state, config, DAO, FeedService, $ionicLoading, $ionicPopup, googleLogin, $window) {
    $scope.config = config;
    $scope.feeds = [];  // Feeds to be shown on UI
    $scope.localFeeds = []; // Feeds from local DB
    
    // Watch the feeds property
    // If new feed is found, add it to DB
    $scope.$watch("feeds", function(newPosts, oldPosts) {
        if (newPosts) {
            _.each(newPosts, function(newPost) {

                // add it to the DB
                var exists = _.findWhere($scope.localFeeds, {link: newPost.link});
                if (_.isUndefined(exists)) {

                    var feed = {
                        // We use the URL of post as document ID
                        _id: newPost.link,
                        post: newPost
                    };

                    // Add the new post to local DB
                    localDB.post(feed, function callback(err, result) {
                        if (!err) {
                          console.log('Successfully posted a feed!');
                        }
                    });
                }
            });
        }
    });

    /**
     * Get the feeds from local DB using DAO service
     */
    $scope.getLocalFeed = function() {
        var localFeed = DAO.getFeed();
        localFeed.then(function(response) {
            if (response && response.length) {
                $scope.feeds = response;
                $scope.localFeeds = response;
                // Hide the loader
                $ionicLoading.hide();
            } else {
                // If no feeds are found in local DB
                // call the feeds API
                $scope.getRemoteFeed();
            }
        }, function() {
            // In case of error, call feeds API
            $scope.getRemoteFeed();
        });
    };

    /**
     * Get the feeds from remote feeds API using FeedService
     */
    $scope.getRemoteFeed = function(id, category) {
        if (!$scope.isOnline()) {
            $ionicPopup.alert({
                title: 'Oops!',
                template: 'You seem to be offline?'
            }).then(function() {
                $ionicLoading.hide();
                $scope.$broadcast('scroll.refreshComplete');
            });
        } else {
            FeedService
                .getFeed({url: config[id][category], count: config.PAGE_SIZE})
                .then(function(response) {
                    $scope.feeds = response;
                    $ionicLoading.hide();
                    $scope.$broadcast('scroll.refreshComplete');
                }, function() {
                }, function() {
                    $ionicLoading.hide();
                    $scope.$broadcast('scroll.refreshComplete');
                });
        }
    };

    /**
     * Called on application load and loads the feeds
     */
    $scope.initFeed = function() {
        $ionicLoading.show({
            template: 'Loading...'
        });
        $scope.getLocalFeed();
    };

    /**
     * Called on "pull to refresh" action
     */
    $scope.refreshFeed = function(id, category) {
        $scope.getRemoteFeed(id, category);
    };

    $scope.isOnline = function() {
        var networkState = null;

        if (navigator.connection) {
            networkState = navigator.connection.type;
        }

        if (networkState && networkState === Connection.NONE) {
            return false;
        }
        if (navigator.onLine) {
            return true;
        } else {
            return false;
        }
    };

    $scope.getImage = function(entry) {
      return (entry && entry.mediaGroups) ? entry.mediaGroups[0].contents[0] : {url : ''};
    }

    $scope.login_user = function() {
      googleLogin.startLogin();
      $state.go('news_card');
    }

    // Initialize the feeds
    // $scope.initFeed();
    if(localStorage.getItem('google_access_token'))
      $state.go('news_card')
}]);

//load feeds from url
app.service("FeedService", function($http, $q) {

    // Return public API.
    return ({
        getFeed: getFeed
    });

    function getFeed(paramData) {
        paramData = paramData || {};
        var url = document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num='+ paramData.count +'&callback=JSON_CALLBACK&q=' + encodeURIComponent(paramData.url),
            request = $http.jsonp(url);

        return (request.then(handleSuccess, handleError));
    }

    // Transform the error response, unwrapping the application data from
    // the API response payload.
    function handleError(response) {
        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (!angular.isObject(response.data) || !response.data.message) {
            return ($q.reject("An unknown error occurred."));
        }
        // Otherwise, use expected error message.
        return ($q.reject(response.data.message));
    }

    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess(response) {
        if (response.data && response.data.responseData && response.data.responseData.feed) {
            if (response.data.responseData.feed.entries) {
                if (response.data.responseData.feed.entries.length) {
                    console.log(response.data.responseData.feed.entries[0]);
                    return (response.data.responseData.feed.entries);
                }
            }
        }
    }
});

//fetch feeds from local DB
app.service("DAO", function($q) {

    // Return public API.
    return ({
        getFeed: getFeed
    });

    function getFeed() {
        var deferred = $q.defer();
        localDB.allDocs({include_docs: true, descending: true}, function(err, doc) {
            if (err) {
                deferred.reject(err);
            } else {
                var rows = [];
                for (var x in doc.rows) {
                    rows.push(doc.rows[x].doc.post);
                }
                deferred.resolve(rows);
            }
        });
        return deferred.promise;
    }

});

app.controller("NewsCardController", function($state,$scope, $stateParams, config, $location) {
  $scope.config = config;
  $scope.goBack = function() {
    window.history.back();
  };
});

app.controller("CategoryController", function($state,$scope, $stateParams, config) {
  $scope.categories = [{name: 'Top stories', icon: 'img/top_stories.png'},
                      {name: 'Entertainment', icon: 'img/entertainment.png'},
                      {name: 'Finance', icon: 'img/finance.png'},
                      {name: 'Sports', icon: 'img/sports.png'},
                      {name: 'Technology', icon: 'img/technology.png'},
                      {name: 'Health', icon: 'img/health.png'},
                      {name: 'World', icon: 'img/world.png'},
                      {name: 'Fashion', icon: 'img/fashion.jpg'}];
                      
  $scope.id = $stateParams.id;
  $scope.goBack = function() {
    window.history.back();
  };
});

app.controller("DetailController", function($state,$scope, $stateParams, config) {
  $scope.id = $stateParams.id;
  $scope.category = $stateParams.category;
  $scope.icon = 'img/' + config[$scope.id]['icon'];
  console.log($scope.icon);
  $scope.getRemoteFeed($scope.id, $scope.category);
  $scope.goBack = function() {
    window.history.back();
  };
});

app.controller("ProfileController", function($state,$scope, $stateParams, config, googleLogin) {
  $scope.config = config;
  $scope.name = localStorage.getItem('name');
  $scope.picture = localStorage.getItem('picture');
  $scope.email = localStorage.getItem('email');
  console.log($scope.userInfo);
  $scope.logout = function() {
    localStorage.removeItem('google_access_token');
    localStorage.removeItem('google_access_token_expire');
    window.location = "http://localhost:8100";
  }
  $scope.goBack = function() {
    window.history.back();
  };
});

