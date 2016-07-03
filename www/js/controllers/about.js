angular.module('starter')
  .config(function($stateProvider){
    $stateProvider
      .state('about',{
      url:'/about',
      templateUrl:'view/about.html',
      controller:'AboutController',
        controllerAs:'about'
    })
  });


angular.module('starter.controller')
.controller('AboutController',['$state',function($state){
  var vm = this;
  vm.back = function(){
    $state.go('playerList');
  };


  return vm;
  console.log('About');
}]);
