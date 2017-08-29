$(document).ready(function() {
    $('#weather-data').hide();
    
    console.log("Hello");

    $( "#citySelector" ).change(function() {

        $.ajax({
            url: "http://rest-service.guides.spring.io/greeting"
        }).then(function(data) {
          console.log(data);
          $('#city').append(data.id);
          $('#time').append(data.content);
          $('#description').append(data.id);
          $('#temperature').append(data.content);
          $('#wind').append(data.id);
        });

        $('#weather-data').show();

    });
});