$(document).ready(function() {

    $("button").on("click", function() {


        $("input").val();

        var city = $("input").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q=nyci&units=imperial&appid=21b0a78e60bc539c02c647c6f01ebfba")

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=imperial&appid=21b0a78e60bc539c02c647c6f01ebfba"

        $.get(url, function(data) {

            alert(data.main.temp)
            
            $("#weather-results").append(data.min.temp)
            
            $("#temp").append(data.main.temp);
            
            $("#hum").append(data.main.humidity);
            
            $("#wind").append(data.wind.speed);

        });
    });



});
