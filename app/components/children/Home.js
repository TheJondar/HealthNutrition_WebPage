var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function () {
    return (
      <div>
       
         <h1>Nav</h1>  

      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Home;
