var React = require('react');

var ErrorModal = React.createClass({

   getDefaultProps: function(){
     return {
       title: 'Error'
     }
   },

   propTypes: {
     title: React.PropTypes.string,
     message: React.PropTypes.string.isRequired
   },

    componentDidMount: function() {
      console.log("Mounted Error Modal");
      var modal = new Foundation.Reveal($('#error-modal'));
      modal.open();
    },

    render: function () {

      var {title, message} = this.props;

      return (
        <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>Some Title {title}</h4>
          <p>Error Message {message}</p>
          <button className="button hollow" data-close="">
            OK
          </button>


        </div>
      );

    }

});

module.exports = ErrorModal;
