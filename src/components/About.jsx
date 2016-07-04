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
var About = () => {
  return (
    <div>
      <h3>About Component</h3>
    </div>
  )
};

module.exports = About;
