var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h4 className="text-center">It is currently {Math.ceil(temp)}&deg;F in {location}.</h4>
  )
};

module.exports = WeatherMessage;
