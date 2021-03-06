var React = require('react');
/*
var WeatherMessage = React.createClass({

  render: function(){

    var {temp, location} = this.props;

    return(
    <div>
      <p>It is {temp} in {location}</p>
    </div>
  );
  }
});
*/
//Refactor as a stateless functional component
//var WeatherMessage = (props) => {
// Destructure in parameters
var WeatherMessage = ({temp, location}) => {
  //var {temp, location} = props;

  return(
    <div>
      <p>It is {temp} in {location}</p>
    </div>
  )

};



module.exports = WeatherMessage;
