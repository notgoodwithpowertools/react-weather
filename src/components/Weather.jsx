var React = require('react');

var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var openWeatherMapAPI = require('../api/openWeatherMap.jsx');
var ErrorModal = require('./ErrorModal.jsx');


var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false,
      location: 'Melbourne',
      temp: 111,
      errorMessage: undefined
    }
  },
  handleSearch: function(location) {
     console.log("handleSearch activated in parent...", location);
     var that = this;
     this.setState({isLoading: true, errorMessage: undefined});

     //alert(location);
     //Manually set response
     /*this.setState({
       location: location,
       temp: 23,
     })*/
     //console.log("openWeatherMap",openWeatherMap.getTemp(location));

     //openWeatherMap.getTemp(location).then(function(temp){
     openWeatherMapAPI.getTemp(location).then(function(data){
       //var data = {temp: 100, location: 'Banana'};
       var temp = data.temp;
       var location = data.location;
       console.log("Setting Data:" + temp + " Location:" + data.location);

       that.setState({location: location, temp: temp, isLoading: false});
     },function(e){
          console.log("Promise return error message", e.message);

          //alert(e.message);
          that.setState({isLoading: false, errorMessage: e.message})
     });
     //console.log("message", errorMessage);



  },

  render: function(){

    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching Weather</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;

      }
    };

    function renderError () {
      console.log("RenederError Message", errorMessage);
      if (typeof errorMessage === 'string') {
        console.log("Error Message is a string", errorMessage);

        return (
          <ErrorModal message={errorMessage}/>
        )
      }
      else {
        console.log("No Error");

      }
    }

    return(
    <div>
      <h3 className="text-center page-title">Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {/*<WeatherMessage temp={temp} location={location}/> */}
      {renderMessage()}
      {renderError()}
    </div>
  );
  }
});

module.exports = Weather;
