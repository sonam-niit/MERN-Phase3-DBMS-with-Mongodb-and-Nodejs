const got =require('got');

got('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response=>{
    console.log(response.body);
})
