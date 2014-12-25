'use strict';

var main = angular.module('test', ['ui.bootstrap']);

main.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{$');
	$interpolateProvider.endSymbol('$}');
});

main.factory('unique', function () {
	return{
		uniquearr: function uniquearr(a) {
			var unique = [];
			for (var i = 0; i < a.length; i++) {
				if (unique.indexOf(a[i]) == -1) {
					unique.push(a[i]);
				}
			}
			return unique;
		}
	};
});

main.controller('mainCtrl', function ($scope, $http, unique){
	$scope.loading = true;
	$http.get('/hotels/')
	.success(function(data) {
		$scope.loading = false;
		$scope.products = data;
		$scope.cities = [];
		
		for(var i=0; i<$scope.products.length;i++){
			$scope.cities.push($scope.products[i].city);
		}
		$scope.uniquecities = unique.uniquearr($scope.cities);
	});
	$scope.searchCity = {"city": false};

	$scope.resetAll = function(){
		$scope.searchCity.city = false;
	};

	$scope.priceRanges = [{'range': "$ 99 And Below", 'min': 0, 'max': 99},
						  {'range': "$ 100 - $ 199", 'min': 100, 'max': 199},
						  {'range': "$ 200 - $ 299", 'min': 200, 'max': 299},
						  {'range': "$ 300 - $ 399", 'min': 300, 'max': 399}, 
						  {'range': "$ 400 And Above", 'min': 400, 'max': 1999}];

	$scope.searchPriceRange = {"priceRange": false};

	$scope.resetPriceRange = function(){
		$scope.searchPriceRange.priceRange = false;
	};

	$scope.starRatings = [{'star': 5.0}, {'star': 4.0}, {'star': 3.0}, {'star': 2.0}, {'star': 1.0}];

	$scope.searchStarRating = {"starRating": false};

	$scope.resetStarRating = function(){
		$scope.searchStarRating.starRating = false;
	};

	// High to low and vice versa
	$scope.orderbytype = null;
	$scope.sortbyprice = function(type){
		$scope.OrderSequence = 'originalBaseRate';
		if(type == "htl"){
			$scope.orderbytype = true;
		}
		else{
			$scope.orderbytype = false;
		}
	};

	// Deal Deep Link Decoder
	$scope.goToLink = function(link){
		$scope.link = decodeURIComponent(link);
	};
});

main.filter('cityFilter', function() {
	return function(items, city) {
		var prod = [];
		if(city === false){
			return items;
		}
		else{
			for(var i=0; i<items.length;i++){
				if(city == items[i].city){
					prod.push(items[i]);
				}
			}
			return prod;
		}
	};
});

main.filter('priceRangeFilter', function() {
	return function(items, priceRange) {
		var prod = [];
		if(priceRange === false){
			return items;
		}
		else{
			priceRange = JSON.parse(priceRange);
			for(var i=0; i<items.length;i++){
				if(items[i].originalBaseRate >= priceRange.min && items[i].originalBaseRate <= priceRange.max){
					prod.push(items[i]);
				}
			}
			return prod;
		}
	};
});

main.filter('starRatingFilter', function() {
	return function(items, starRating) {
		var prod = [];
		if(starRating === false){
			return items;
		}
		else{
			starRating = JSON.parse(starRating);
			for(var i=0; i<items.length;i++){
				if(items[i].starRating == starRating.star){
					prod.push(items[i]);
				}
			}
			return prod;
		}
	};
});