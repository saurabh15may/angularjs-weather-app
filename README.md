# weather-app-frontend

#### Open index.html in any browser to run the application. This is a Single Page application.

##### REST endpoint to fetch list of cities. Used inside "cityRepoService.js"
>http://localhost:8080/cities
>This is developed in the code repository "weather-app-city-rest-api" using Spring boot

##### REST endpoint to fetch weather data for a particular city based on citiId. used inside "weatherAPI.js"
>https://4ce8rjr0je.execute-api.us-east-1.amazonaws.com/dev/weather/city?id=XXXX
>This endpoint is developed in the code repository "weather-app-microservice" using Java 8, AWS Lambda, API Gateway and Serverless framework.

###### Screenshot of the application - Home Screen
>https://s3-ap-southeast-2.amazonaws.com/saurabhk/WeatherApp_HomePage.jpg
###### Screenshot of the application - Result Screen
>https://s3-ap-southeast-2.amazonaws.com/saurabhk/WeatherApp_ResultPage.jpg