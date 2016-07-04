var React = require('react');

var Nav = require('./Nav.jsx');

/*
var Main = React.createClass({
  render: function(){
    return(
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {this.props.children}
    </div>
  );
  }
});
*/

// Refactor to stateless functional Component
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  )
};

module.exports = Main;
