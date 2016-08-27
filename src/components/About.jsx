var React = require('react');

/*
var About = React.createClass({
  render: function(){
    return(
    <div>
      <h3>About Component</h3>
    </div>
  );
  }
});
*/
// Refactor to stateless functional Component
// Can only do this if component is presentational and does not manage any stateless
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the About page.</p>
      <p>This is a weather application built with</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>.
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a>
        </li>
      </ul>

    </div>
  )
};

module.exports = About;
