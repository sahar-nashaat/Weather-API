var allForecast = [];

var myHTTP = new XMLHttpRequest();

myHTTP.open('POST', 'http://api.weatherapi.com/v1/forecast.json?key=565157264f4e44b8b94154506240501&q=Cairo&days=3&aqi=no&alerts=no');
myHTTP.send();
myHTTP.open('POST', 'http://api.weatherapi.com/v1/forecast.json?key=565157264f4e44b8b94154506240501&q=Cairo&days=3&aqi=no&alerts=no');
myHTTP.send();

myHTTP.addEventListener('readystatechange', function() {
    if (myHTTP.readyState == 4){
        allForecast = JSON.parse(myHTTP.response);
        displayData(); 
        console.log(allForecast);
    }
})

function displayData(){
    var container = `
    <div class="col-md-4">
    <div class="card border-0 textColor fw-medium ">
        <div class="card-header d-flex justify-content-md-between grayOne border-0">
          <p>${allForecast.current.last_updated}</p>
        </div>
        <div class="card-body grayTwo rounded-bottom-2 ">
            <p class="">${allForecast.location.name}</p>
            <div class="card-title d-flex text-white">
                <h5 class="current">${allForecast.current.temp_c+'°C'}</h5>
                <img class="mx-2 w-25 h-25" src=https:${allForecast.current.condition.icon} alt="">
            </div>
          <p class="card-text text-primary">${allForecast.current.condition.text}</p>
          <span><img src="Img/icon-umberella.png" class="mx-2" alt="umbrella">20%</span>
          <span><img src="Img/icon-wind.png" class="mx-2" alt="wind">18km/h</span>
          <span><img src="Img/icon-compass.png" class="mx-2" alt="compass">East</span>
        </div>
      </div>
</div>
<div class="col-md-4">
    <div class="card text-center h-100 border-0 textColor  fw-medium ">
        <div class="card-header d-flex justify-content-md-between blackOne border-0">
          <p>${allForecast.forecast.forecastday[1].date}</p>
        </div>
        <div class="card-body blackTwo rounded-bottom-2 ">
            <div class="card-title  text-white">
            <img class="mx-2 w-25 h-25" src=https:${allForecast.forecast.forecastday[1].day.condition.icon} alt="">
            <h5 >${allForecast.forecast.forecastday[1].day.maxtemp_c+'°C'}</h5>
            <h5 class="textColor nightDegree">${allForecast.forecast.forecastday[1].day.mintemp_c+'°C'}</h5>
                
            </div>
          
          <p class="card-text text-primary ">${allForecast.forecast.forecastday[1].day.condition.text}</p>
        </div>
      </div>
</div>
<div class="col-md-4">
    <div class="card text-center h-100 border-0 textColor  fw-medium ">
        <div class="card-header d-flex justify-content-md-between grayOne border-0">
        <p>${allForecast.forecast.forecastday[2].date}</p>
        </div>
        <div class="card-body grayTwo rounded-bottom-2 ">
            <div class="card-title  text-white">
            <img class="mx-2 w-25 h-25" src=https:${allForecast.forecast.forecastday[2].day.condition.icon} alt="">
            <h5 >${allForecast.forecast.forecastday[2].day.maxtemp_c+'°C'}</h5>
            <h5 class="textColor nightDegree">${allForecast.forecast.forecastday[2].day.mintemp_c+'°C'}</h5>
                
            </div>
          
          <p class="card-text text-primary ">Sunny</p>
        </div>
      </div>
</div>
    `
    document.querySelector('.row').innerHTML = container;
}
