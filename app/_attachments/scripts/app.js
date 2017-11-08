'use strict'

var app = angular.module('movieApp', ['ngRoute']);


app.controller('homeCtrl', function homeCtrl($scope) {
	$("#searchButton").on('click', function(e) {

		var nameWithSpace = document.getElementById("actorentry").value.toLowerCase()
		var nameValue = nameWithSpace.replace(" ", "+");



		$.getJSON("http://localhost:5984/movies/_design/app/_view/byName?key=\"" + nameWithSpace + "\"", function(data, status){
			if(parseInt(data.rows.length) >=1) {
				document.write(JSON.stringify(data.rows[0].value));
			}

			else {
				$.getJSON("http://theimdbapi.org/api/find/person?name=" + nameValue, function(data, status){

					var newData = {
						key : nameWithSpace,
						movies : []
					}

					for(var i=0; i < data[0].filmography.actor.length; i++) {
						newData.movies.push(data[0].filmography.actor[i].title);
					}

					var key = newData.key;
					var movies = newData.movies;

			        $.ajax({
			           type: "POST",
			           url: "../../",
			           contentType: "application/json",
			           data: JSON.stringify({key:key, movies:movies}),
			            error: function(xhr, ajaxOptions, thrownError) {
			               alert("Failed!");
			           }

			        });
				});				
			}
		});	
	});
});