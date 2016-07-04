var Axios = require('axios');

// OpenweatherMap API key
//efc67a93a72da52608a8a96e19fd3222



const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=efc67a93a72da52608a8a96e19fd3222&units=metric';

module.exports = {

  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    console.log("URL:", requestUrl);

    //Promise template -- axios.get(requestUrl).then(function(res){}, function(res){})
    return Axios.get(requestUrl).then(

      function(res){
        //debugger;
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message)
        } else {
          console.log("Temp:", res.data.main.temp);
          console.log("Loc:", res.data.name);
          var data = {temp: res.data.main.temp, location: res.data.name};

          //return res.data.main.temp;
          return data;
        }
      },
      function(res){
        throw new Error(res.data.message);
      });

  }

}
