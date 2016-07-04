var React = require('react');

//var Examples = require('./Examples.jsx');
/*
var Examples = React.createClass({
  render: function(){
    return(
    <div>
      <h3>Examples Component</h3>
    </div>
  );
  }
});
*/

// Refactor to stateless functional Component
var Examples = () => {

  return (
    <div>
      <h3>Examples Component</h3>
    </div>
  )
  
};


module.exports = Examples;
