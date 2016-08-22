var React = require('react');

var {Link} = require('react-router');
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
      <h1 className="text-center">Examples Component</h1>
      <p>A few example locations</p>
      <ol>
        <li>
          <Link to='/?location=Melbourne'>Melbourne</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio</Link>
        </li>

      </ol>
    </div>
  )

};


module.exports = Examples;
