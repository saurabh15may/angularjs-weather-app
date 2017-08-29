$(document).ready(function() {
    $('#weather-data').hide();
    
    console.log("Hello");

    var cors_api_url = 'https://cors-anywhere.herokuapp.com/';

    $( "#citySelector" ).change(function() {

        $.ajax({
            url: cors_api_url + "http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=0c87cd4372ac1f3b58570b17e8f7326b"
        }).then(function(data) {
          console.log(data);

          $('#city').append(data.name);
          $('#time').append(data.dt);
          $('#description').append(data.weather[0].description);
          $('#temperature').append(data.main.temp+ " Kelvin");
          $('#wind').append(data.wind.speed+" meter/sec");
        });

        $('#weather-data').show();

    });
});
