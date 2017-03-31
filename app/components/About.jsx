var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Here are some of the tools and code behind this Weather App (built for Complete React App Developer Course):</p>
      <ol>
        <li>
          <a href='http://www.openweathermap.org'>Open Weather Map</a>  -- Free weather API
        </li>
        <li>
          <a href='https://facebook.github.io/react'>React</a> -- Javascript framework
        </li>
        <li>
          <a href='https://github.com/rent69/reactWeather'>Github</a> -- Code repository
        </li>
      </ol>
    </div>
  )
};

module.exports = About;
