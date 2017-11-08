'use strict'

var app = angular.module('movieApp', ['ngRoute']);


app.controller('homeCtrl', function homeCtrl($scope) {
	$("#searchButton").on('click', function(e) {
		var nameValue = document.getElementById("actorentry").value.toLowerCase().replace(" ", "+");

		$.get("http://theimdbapi.org/api/find/person?name=" + nameValue, function(data, status){
  			return data;
		});
	})
});