$(document).ready(function() {
    $('#weather-data').hide();

    $( "#citySelector" ).change(function() {
        var cityId = $("#citySelector").val();
        var restURL =  "https://4ce8rjr0je.execute-api.us-east-1.amazonaws.com/dev/weather/city?id="+cityId;
        console.log(restURL);
        $.ajax({
            url: restURL 
        }).then(function(data) {
          var data = JSON.parse(data.body);
          console.log(data);
          $('#city').html(data.city);
          $('#time').html(data.updatedTime);
          $('#description').html(data.weather);
          $('#temperature').html(data.temperature + " degree celcius");
          $('#wind').html(data.wind);
        });
        $('#weather-data').show();
    });
});
