angular.module('starter.service',[])
  .service('s',function(){
    return {

    }
  })

.factory('AudioFactory',function($interval){
  var audio = new Audio('media/ybjc.mp3');
  audio.loop=false;
  audio.muted = false;
  var currentChapter = 0;
  var dict = [0,46,84,121,162,203,239,277];

  function _calcChapter(t){
    var answer;
    if(t>=277){
      answer = 7;
    }else if(t>=239){
      answer = 6;
    }else if(t>=203){
      answer = 5;
    }else if(t>=162){
      answer = 4;
    }else if(t>=121){
      answer = 3;
    }else if(t>=84){
      answer = 2;
    }else if(t>=46){
      answer = 1;
    }else{
      answer = 0;
    }
    return answer;
  }
  $interval(function(){
    currentChapter = _calcChapter(audio.currentTime);
  },1000);

  function _playOrPause(){
    if(audio.paused){
      audio.play();
    }else{
      audio.pause();
    }
    return audio.paused;
  }

  function _setTime(t){
    audio.currentTime = t;
  }

  //chapter : 0,1,2,3,4,5,6,7
  function _start(chapter){

    chapter = chapter || 0;
    currentChapter = chapter;
    _setTime(dict[chapter]);
    audio.play();
  }

  function _next(){
    if(currentChapter === 7){
      console.log('This is the last chapter');
    }else{
      currentChapter++;
      _start(currentChapter);
    }
    return currentChapter;
  }

  function _before(){
    if(currentChapter === 0){
      console.log('This is the first chapter');
    }else{
      currentChapter--;
      _start(currentChapter);
    }
    return currentChapter;
  }

  function _setMute(){
    audio.muted = !audio.muted;
    return audio.muted;
  }

  function _getCurrentTime(){
    return audio.currentTime;
  }

  function _getDuration(){
    return audio.duration;
  }

  function _getChapter(){
    return currentChapter;
  }

  function _getEnded(){
    return audio.ended;
  }

  function _getPaused(){
    return audio.paused;
  }

  function _forward(){
    if(audio.duration - audio.currentTime >6){
      audio.currentTime = audio.currentTime + 5;
    }
    return audio.currentTime;
  }
  function _back(){
    if(audio.currentTime > 6){
      audio.currentTime = audio.currentTime - 5;
    }
    return audio.currentTime;
  }


  return {
    start:function(chapter){
      _start(chapter);
    },

    playOrPause:function(){
      return _playOrPause();
    },
    next:function(){
      return _next();
    },
    before:function(){
      return _before();
    },
    setMute:function(){
      return _setMute();
    },
    getCurrentTime:function(){
      return _getCurrentTime();
    },
    getDuration:function(){
      return _getDuration();
    },
    getChpter:function(){
      return _getChapter();
    },
    getEnded:function(){
      return _getEnded();
    },
    getPaused:function(){
      return _getPaused();
    },
    forward:function(){
      return _forward();
    },
    back:function(){
      return _back();
    }

  }


});
