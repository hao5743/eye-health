angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('player',{
        url:'/player',
        templateUrl:'view/player.html',
        controller:'PlayerController'
      })
  });
angular.module('starter.controller')
  .controller('PlayerController',['$state','$scope','$interval','AudioFactory',function($state,$scope,$interval,AudioFactory){
    $scope.back = function(){
      $state.go('playerList');
    };
      $scope.goAbout = function(){
          $state.go('about');
      };

    var dict = [0,46,84,121,162,203,239,277];
    var imgs = ['img/1.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg','img/6.jpg','img/6.jpg'];

    var audio = AudioFactory;
    var p = $scope.p = {
      currentChapter:audio.getChpter(),
      currentTime:audio.getCurrentTime(),
      duration: audio.getDuration(),
      paused:audio.getPaused(),
      muted:false,
      ended:false,
      imgs:imgs,
      playOrPause:function(){
        p.paused = audio.playOrPause();
      },
      next:function(){
        p.currentChapter = audio.next();
      },
      before:function(){
        p.currentChapter = audio.before();
      },
      setMute:function(){
        p.muted = audio.setMute();
      },
      back:function(){
        p.currentTime = audio.back();
      },
      forward:function(){
        p.currentTime = audio.forward();
      }
    };

    $interval(function() {
      p.currentTime = audio.getCurrentTime();
      p.currentChapter = audio.getChpter();
      p.ended = audio.getEnded();
      p.paused = audio.getPaused();
    },1000);





  }]);
