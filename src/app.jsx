var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//Test experimental JS

//Import Router
var Routes = require('./routes');
var Main = require('./components/Main.jsx');

var ObjOne = {
  name: 'Andrew',
  location: 'Melbourne'
};
var ObjTwo = {
  age: 49,
  ...ObjOne
};
console.log("Object Two:", ObjTwo);

// Destructuring
var {name} = ObjOne;
console.log("Destructured name:", name);



var message = 'Boilerplate';

/*
ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('app')
);
*/

ReactDOM.render(
  Routes,
  document.getElementById('app')
);
