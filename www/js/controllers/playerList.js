angular.module('starter')
  .config(function($stateProvider){
   $stateProvider
     .state('playerList',{
      url:'/playerList',
      templateUrl:'view/playerList.html',
      controller:'PlayerListController',
      controllerAs:'playList'
    });
  });


angular.module('starter.controller',[])
  .controller('PlayerListController',['$state','AudioFactory','$interval',function($state,AudioFactory,$interval){
    console.log('PlayerList');
    var vm = this;
    var audio = AudioFactory;
    vm.goAbout = function(){
      $state.go('about');
    };
    vm.goPlay = function(chapter){
      console.log(chapter);
      AudioFactory.start(chapter);
      $state.go('player');
    };
    vm.showPlaying = function(){
      $state.go('player');
    };

    vm.lists=[
      {name:'准备',src:'',desp:''},
      {name:'第1节',src:'',desp:''},
      {name:'第2节',src:'',desp:''},
      {name:'第3节',src:'',desp:''},
      {name:'第4节',src:'',desp:''},
      {name:'第5节',src:'',desp:''},
      {name:'第6节',src:'',desp:''}
    ];
    var p = vm.p = {
      currentTime:audio.getCurrentTime(),
      currentChapter:audio.getChpter(),
      isPlaying:false,
      paused : audio.getPaused(),
      playOrPause:function(){
        p.paused = audio.playOrPause();
      }
    };
    $interval(function() {
      p.currentTime = audio.getCurrentTime();
      p.currentChapter = audio.getChpter();
      p.ended = audio.getEnded();
      p.paused = audio.getPaused();
      if(p.currentTime>0 && !p.ended){
        p.isPlaying = true;
      }else{
        p.isPlaying = false;
      }
    },1000);
    return vm;
  }]);
