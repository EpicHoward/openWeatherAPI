$(document).ready(function() {

    $("button").on("click", function() {


        $("input").val();

        var city = $("input").val();

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=21b0a78e60bc539c02c647c6f01ebfba"

        $.get(url, function(data) {

            $("#temp").html(data.main.temp);

            $("#hum").html(data.main.humidity);

            $("#wind-Speed").html(data.wind.speed);

$("#weather-results").append("<img src=\"https://api.mapbox.com/v4/mapbox.dark/"+data.coord.ion+","+
data.coord.lat + 
", 12/600x600.png?access_token=21b0a78e60bc539c02c647c6f01ebfba\">");


        });
    });



});



