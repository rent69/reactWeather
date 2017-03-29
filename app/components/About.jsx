var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

// Stateless Functional Component syntax:

// var About = function (props) {
//   return (
//     <h3>About Component</h3>
//   )
// };

// Stateless Functional Component ARROW syntax :
var About = (props) => {
  return (
    <div>
    <h3>About</h3>
    <p>Welcome to the About page</p>
    </div>
  )
};

module.exports = About;
