let request = require('request');

let apiKey= '1f8f4acf94e8cd0dedf4ed4d937a06d6';

const CITIES=['Kolkata','Bangalore','Lucknow','Allahabad','Delhi'];

const city= CITIES[Math.floor(Math.random()* CITIES.length)];

let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, function(err,response,body){
    console.log('fetching weather data');
    if(err){
        console.log('error while getting data');
    }
    else{
        let weather=JSON.parse(body);
        let message= `It's ${weather.main.temp} degrees in ${weather.name}`;

        console.log(message);
    }

    greet();
})

function greet(){
    console.log("Weather fetched..!!!")
}