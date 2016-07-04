var React = require('react');
var ReactRouter = require('react-router');
//var Router = ReactRouter.Router;
//var Route = ReactRouter.Route;

var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main.jsx');
var Weather = require('./components/Weather.jsx');
var About = require('./components/About.jsx');
var Examples = require('./components/Examples.jsx');

//var Base = require('./components/Base.jsx');
//var Page1 = require('./components/Page1.jsx');
//var Page2 = require('./components/Page2.jsx');


    /* <Route path="/" component={Base}>

      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>

    </Route> */

var Routes = (
  <Router history={hashHistory}>
     <Route path="/" component={Main}>
       <Route path="about" component={About} />
       <IndexRoute components={Weather} />
       <Route path="examples" component={Examples} />
     </Route>
  </Router>
);

module.exports = Routes;
