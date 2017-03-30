var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3>It is currently {Math.ceil(temp)}&deg;F in {location}.</h3>
  )
};

module.exports = WeatherMessage;
