// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.service','starter.controller']);

var app = angular.module('starter');
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
});
  app.filter('timeFilter',function(){
      return function(input){
        var answer='';
        var time = parseInt(input);
        var m = parseInt(time/60);
        var s = time%60;
        m = '0'+m;
        s = s<10 ? '0'+s : ''+s;
        answer = m+':'+s;
        return answer;
      }
  });
  app.filter('chapterFilter',function(){
    return function(input){
      var ch=['准备','第一节','第二节','第三节','第四节','第五节','第六节','第六节'];
      return ch[input];
    }
  });
app.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise("/playerList");

});
