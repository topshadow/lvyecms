angular.module('app',['ngRoute','ui.router'])
  .config(function($stateProvider, $urlRouterProvider){
  	$stateProvider.state('about',{
  		url:'/about',
  		templateUrl:'templates/about.html'	
  	}).state('about.gsjj',{
  		url:'/gsjj',
  		templateUrl:'templates/about/gsjj.html'
  	})
  	.state('about.zyys',{
  		url:'/zyys',
  		templateUrl:'templates/about/zyys.html'
  	})
  	.state('about.fzlc',{
  		url:'/fzlc',
  		templateUrl:'templates/about/fzlc.html'
  	})
  	.state('about.qyry',{
  		url:'/qyry',
  		templateUrl:'templates/about/qyry.html'
  	})
  	.state('about.zzjg',{
  		url:'/zzjg',
  		templateUrl:'templates/about/zzjg.html'
  	})
  	$urlRouterProvider.otherwise('/about/gsjj');
  		
 });
