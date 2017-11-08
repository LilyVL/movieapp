'use strict'

var app = angular.module('movieApp', ['ngRoute']);


app.controller('homeCtrl', function homeCtrl($scope) {
	$("#searchButton").on('click', function(e) {
		var nameValue = document.getElementById("actorentry").value.toLowerCase().replace(" ", "+");

		$.getJSON("http://theimdbapi.org/api/find/person?name=" + nameValue, function(data, status){
			document.write(JSON.stringify(data[0].filmography.actor));
		});
	})
});