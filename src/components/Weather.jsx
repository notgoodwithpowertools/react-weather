var React = require('react');

var WeatherForm = require('./WeatherForm.jsx');
var WeatherMessage = require('./WeatherMessage.jsx');
var openWeatherMap = require('../api/openWeatherMap.jsx')


var Weather = React.createClass({

  getInitialState: function(){
    return {
      isLoading: false,
      location: 'Melbourne',
      temp: 111
    }
  },
  handleSearch: function(location) {
     console.log("handleSearch activated in parent...", location);

     this.setState({isLoading: true});
     //alert(location);
     //Manually set response
     /*this.setState({
       location: location,
       temp: 23,
     })*/
     //console.log("openWeatherMap",openWeatherMap.getTemp(location));
     var that = this;
     //openWeatherMap.getTemp(location).then(function(temp){
     openWeatherMap.getTemp(location).then(function(data){
       //var data = {temp: 100, location: 'Banana'};
       var temp = data.temp;
       var location = data.location;
       console.log("Setting Data:" + temp + " Location:" + data.location);

       that.setState({location: location, temp: temp, isLoading: false});
     },function(errorMessage){
          alert(errorMessage);
          that.setState({isLoading: false})
     });


  },

  render: function(){

    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching Weather</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;

      }
    }

    return(
    <div>
      <h3>Weather Component</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {/*<WeatherMessage temp={temp} location={location}/> */}
      {renderMessage()}
    </div>
  );
  }
});

module.exports = Weather;
