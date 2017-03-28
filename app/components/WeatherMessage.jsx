var React = require('react');

//     var WeatherMessage = React.createClass({
//       render: function () {
//         var {temp, location} = this.props;
//         return (
//           <p>It's currently {temp}ºF in {location}.</p>
//         );
//       }
// });
//
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (
//     <p>It's currently {temp}ºF in {location}.</p>
//   );
// };

// ES6 DESTUCTURED SYNTAX:
var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It's currently {Math.ceil(temp)}ºF in {location}.</h3>
  );
};
module.exports = WeatherMessage;
