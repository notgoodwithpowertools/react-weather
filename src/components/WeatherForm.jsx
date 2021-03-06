var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    console.log("Form Submitted...");
    var location = this.refs.location.value;
    console.log("Location:",location);

    if (location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },

  render: function(){
    return(
    <div>
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location"></input>
        <button>Get Weather</button>
      </form>
    </div>
  );
  }
});

module.exports = WeatherForm;
